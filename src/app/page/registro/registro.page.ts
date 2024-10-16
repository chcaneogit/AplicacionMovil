import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nuevo_usuario: Usuario = {
    rut: null,
    dv: '',
    nombre: '',
    correo: '',
    password: '',
    fecha_nacimiento: '',
  };

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  registrarUsuario() {
    // Validar campos antes de continuar
    if (!this.validarCampos()) {
      return; // Si la validación falla, salir del método
    }

    if (this.nuevo_usuario.rut === null) {
      this.presentAlert('Error de validación', 'El RUT es obligatorio.');
      return;
    }

    // Verificar si el RUT ya existe en la base de datos
    this.supabaseService.getUsuarioByRut(this.nuevo_usuario.rut as number).subscribe({
      next: async (usuarioExistente) => {
        if (usuarioExistente && usuarioExistente.length > 0) {
          await this.presentAlert('Error de registro', 'El RUT ya está registrado en el sistema.');
          return;
        }

        // Procede con el registro
        this.supabaseService.addUsuario(this.nuevo_usuario).subscribe({
          next: async () => {
            await this.presentAlert('Registro Exitoso', 'Te has registrado exitosamente.', true);
          },
          error: async (error) => {
            console.error('Error al registrar usuario:', error);
            await this.presentAlert('Error al registrar usuario', 'Por favor, intenta nuevamente.');
          }
        });
      },
      error: async (error) => {
        console.error('Error al verificar RUT:', error);
        await this.presentAlert('Error al verificar RUT', 'Por favor, intenta nuevamente.');
      }
    });
  }

  private validarCampos(): boolean {
    if (
      !this.nuevo_usuario.rut ||
      !this.nuevo_usuario.dv ||
      !this.nuevo_usuario.nombre ||
      !this.nuevo_usuario.correo ||
      !this.nuevo_usuario.password ||
      !this.nuevo_usuario.fecha_nacimiento
    ) {
      this.presentAlert('Error de validación', 'Todos los campos son obligatorios');
      return false;
    }

    const rutPattern = /^[0-9]{7,8}$/;
    if (!rutPattern.test(this.nuevo_usuario.rut?.toString())) {
      this.presentAlert('Error de validación', 'El RUT debe contener 7 u 8 dígitos numéricos');
      return false;
    }

    const dvPattern = /^[0-9kK]{1}$/;
    if (!dvPattern.test(this.nuevo_usuario.dv)) {
      this.presentAlert('Error de validación', 'El dígito verificador debe ser un número del 0 al 9 o "K".');
      return false;
    }

    if (!this.validarRutConDv(this.nuevo_usuario.rut, this.nuevo_usuario.dv)) {
      this.presentAlert('Error de validación', 'El RUT y el dígito verificador no coinciden.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.nuevo_usuario.correo)) {
      this.presentAlert('Error de validación', 'Por favor, ingresa un correo electrónico válido.');
      return false;
    }

    return true;
  }

  private validarRutConDv(rut: number, dv: string): boolean {
    let suma = 0;
    let multiplicador = 2;
    const rutString = rut.toString();

    for (let i = rutString.length - 1; i >= 0; i--) {
      suma += parseInt(rutString.charAt(i), 10) * multiplicador;
      multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }

    const residuo = 11 - (suma % 11);
    let dvEsperado;
    if (residuo === 11) {
      dvEsperado = '0';
    } else if (residuo === 10) {
      dvEsperado = 'K';
    } else {
      dvEsperado = residuo.toString();
    }

    return dvEsperado.toUpperCase() === dv.toUpperCase();
  }

  private async presentAlert(header: string, message: string, navigateAfter?: boolean) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();

    if (navigateAfter) {
      await alert.onDidDismiss();  
      this.router.navigate(['/login']);
    }
  }

 
}
