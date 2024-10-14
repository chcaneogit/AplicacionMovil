import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion/autenticacion.service';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  usuario: any = {}; // Asegúrate de que las propiedades estén definidas
  editField: string | null = null; // Campo que se está editando

  constructor(
    private authService: AutenticacionService,
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.estaAutenticado().subscribe(isAuthenticated => {
      console.log('Estado de autenticación:', isAuthenticated); // Agrega este log
      if (isAuthenticated) {
        this.cargarUsuario(); // Solo carga el usuario si está autenticado
      } else {
        this.router.navigate(['/login']); // Redirige si no está autenticado
      }
    });
  }

  cargarUsuario() {
    this.authService.obtenerRutUsuario().subscribe(rut => {
      console.log('RUT obtenido:', rut); // Agrega este log
      if (rut) {
        this.supabaseService.getUsuarioByRut(+rut).subscribe(response => {
          if (response && response.length > 0) {
            this.usuario = response[0]; // Asumiendo que la respuesta es un array
            console.log('Usuario cargado:', this.usuario); // Para verificar que se carga correctamente
          } else {
            console.error('No se encontró el usuario con el RUT:', rut);
          }
        });
      } else {
        console.error('No se obtuvo RUT. Redirigiendo a login.');
        this.router.navigate(['/login']); // Redirigir si no hay RUT
      }
    });
  }


  guardarCambios() {
    this.supabaseService.updateUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/dashboard']); // Redirigir después de guardar
    });
  }

  editarCampo(campo: string) {
    this.editField = campo; // Establece el campo actual como editable
  }

  cancelarEdicion() {
    this.editField = null; // Cancela la edición
    this.cargarUsuario(); // Opcional: vuelve a cargar el usuario desde la base de datos
  }
}
