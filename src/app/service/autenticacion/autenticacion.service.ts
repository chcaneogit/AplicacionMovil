import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  private rutUsuarioSubject = new BehaviorSubject<string | null>(null);
  private nombreUsuarioSubject = new BehaviorSubject<string | null>(null); // Para almacenar el nombre del usuario

  constructor(private supabaseService: SupabaseService) {}

  // Método para establecer el estado de autenticación
  setAutenticado(estado: boolean, rut: string | null = null) {
    this.usuarioAutenticadoSubject.next(estado);
    this.rutUsuarioSubject.next(rut);

    if (estado && rut) {
      this.supabaseService.getUsuarioByRut(+rut).subscribe({
        next: (usuario) => {
          if (usuario && usuario.length > 0) {
            this.nombreUsuarioSubject.next(usuario[0].nombre); // Asumiendo que 'nombre' es el campo que deseas mostrar
          } else {
            this.nombreUsuarioSubject.next(null);
          }
        },
        error: (err) => {
          console.error('Error al obtener el usuario por RUT:', err);
          this.nombreUsuarioSubject.next(null);
        }
      });
    } else {
      this.nombreUsuarioSubject.next(null);
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

  cerrarSesion() {
    this.setAutenticado(false); // Cambiar el estado de autenticación
    this.rutUsuarioSubject.next(null); // Limpiar el RUT al cerrar sesión
    this.nombreUsuarioSubject.next(null); // Limpiar el nombre al cerrar sesión
  }
}
