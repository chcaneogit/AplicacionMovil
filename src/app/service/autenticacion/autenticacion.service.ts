import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  public usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable(); // Observable para el estado de autenticación
  private rutUsuarioSubject = new BehaviorSubject<string | null>(null);
  private nombreUsuarioSubject = new BehaviorSubject<string | null>(null);
  public usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);

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
        },
      });
    } else {
      this.nombreUsuarioSubject.next(null);
      this.usuarioActualSubject.next(null); // Limpiar si no está autenticado
    }
  }

  // Método para verificar si la sesión ha expirado
  async isDateExpired(): Promise<boolean> {
    const userData = await this.getDecryptedUserData();
    if (userData?.expiration && Date.now() < userData.expiration) {
      console.log('Usuario dentro del tiempo de expiración');
      return true; // La sesión es válida si el tiempo actual es menor a la expiración
    }
    console.log('Usuario fuera del tiempo de expiración');
    await this.cerrarSesion(); // Si ya pasó el tiempo, desloguea
    return false;
  }

  // Método para obtener el estado de autenticación (boolean)
  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.value; // Devuelve el valor actual
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

  // Método para desencriptar los datos del usuario almacenados en el dispositivo
  async getDecryptedUserData() {
    const { value } = await Preferences.get({ key: 'userData' });
    if (value) {
      try {
        console.log('try');
        const bytes = CryptoJS.AES.decrypt(value, environment.apiKeySupabase);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
      } catch (e) {
        console.log(e);
        this.cerrarSesion();
      }
    }
    return null;
  }

  // Método para cerrar sesión
  cerrarSesion() {
    this.setAutenticado(false); // Cambiar el estado de autenticación
    this.rutUsuarioSubject.next(null); // Limpiar el RUT al cerrar sesión
    this.nombreUsuarioSubject.next(null); // Limpiar el nombre al cerrar sesión
    this.usuarioActualSubject.next(null); // Limpiar el usuario actual
  }
}
