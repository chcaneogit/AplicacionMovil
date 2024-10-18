import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  private rutUsuarioSubject = new BehaviorSubject<string | null>(null);
  private nombreUsuarioSubject = new BehaviorSubject<string | null>(null);
  public usuarioActualSubject = new BehaviorSubject<Usuario | null>(null); // Cambiar a public

  constructor(private supabaseService: SupabaseService) {}

  // Método para establecer el estado de autenticación y emitir el usuario
  setAutenticado(estado: boolean, rut: string | null = null) {
    this.usuarioAutenticadoSubject.next(estado);
    this.rutUsuarioSubject.next(rut);

    if (estado && rut) {
      this.supabaseService.getUsuarioByRut(+rut).subscribe({
        next: (usuario) => {
          if (usuario && usuario.length > 0) {
            this.nombreUsuarioSubject.next(usuario[0].nombre);
            this.usuarioActualSubject.next(usuario[0]); // Emitir el usuario actual
          } else {
            this.nombreUsuarioSubject.next(null);
            this.usuarioActualSubject.next(null); // Limpiar si no hay usuario
          }
        },
        error: (err) => {
          console.error('Error al obtener el usuario por RUT:', err);
          this.nombreUsuarioSubject.next(null);
          this.usuarioActualSubject.next(null); // Limpiar si no está autenticado
        }
      });
    } else {
      this.nombreUsuarioSubject.next(null);
      this.usuarioActualSubject.next(null); // Limpiar si no está autenticado
    }
  }

  // Método para obtener el estado de autenticación
  estaAutenticado() {
    return this.usuarioAutenticadoSubject.asObservable();
  }

  // Método para obtener el RUT del usuario
  obtenerRutUsuario() {
    return this.rutUsuarioSubject.asObservable();
  }

  // Método para obtener el nombre del usuario
  obtenerNombreUsuario() {
    return this.nombreUsuarioSubject.asObservable(); // Retorna un Observable del nombre
  }

  // Método para obtener el usuario actual
  obtenerUsuarioActual() {
    return this.usuarioActualSubject.asObservable();
  }

  cerrarSesion() {
    this.setAutenticado(false); // Cambiar el estado de autenticación
    this.rutUsuarioSubject.next(null); // Limpiar el RUT al cerrar sesión
    this.nombreUsuarioSubject.next(null); // Limpiar el nombre al cerrar sesión
    this.usuarioActualSubject.next(null); // Limpiar el usuario actual
  }
}
