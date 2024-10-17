import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AutenticacionService } from 'src/app/service/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  usuario: Usuario = {
    nombre: '',
    correo: '',
    password: '',
    fecha_nacimiento: '',
    rut: null,
    dv: ''
  };
  editField: string = '';

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private alertController: AlertController,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.autenticacionService.obtenerRutUsuario().subscribe((rut) => {
      if (rut) {
        this.supabaseService.getUsuarioByRut(+rut).subscribe((response: any) => {
          if (response && response.length > 0) {
            this.usuario = response[0]; // Ajusta según la estructura de tu respuesta
          }
        });
      }
    });
  }

  editarCampo(campo: string) {
    this.editField = campo;
  }

  cancelarEdicion() {
    this.editField = '';
    this.cargarUsuario(); // Recargar datos del usuario en caso de cancelar
  }

  async guardarCambios() {
    if (!this.validarCampos()) {
      return;
    }

    this.supabaseService.updateUsuario(this.usuario).subscribe({
      next: async () => {
        await this.presentAlert('Éxito', 'Los cambios han sido guardados.');
        this.editField = '';

        // Emitir el usuario actualizado
        this.autenticacionService.usuarioActualSubject.next(this.usuario);

        this.router.navigate(['/dashboard']);
      },
      error: async (error) => {
        console.error('Error al guardar cambios:', error);
        await this.presentAlert('Error', 'No se pudieron guardar los cambios.');
      }
    });
  }

  private validarCampos(): boolean {
    if (!this.usuario.nombre || !this.usuario.correo || !this.usuario.password || !this.usuario.fecha_nacimiento) {
      this.presentAlert('Error de validación', 'Todos los campos son obligatorios.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.usuario.correo)) {
      this.presentAlert('Error de validación', 'Por favor, ingresa un correo electrónico válido.');
      return false;
    }

    return true;
  }

  private async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
