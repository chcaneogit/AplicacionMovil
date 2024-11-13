import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject, Observable } from 'rxjs';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  public usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();
  private rutUsuarioSubject = new BehaviorSubject<string | null>(null);
  private nombreUsuarioSubject = new BehaviorSubject<string | null>(null);
  public usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  // Método para establecer el estado de autenticación y emitir el usuario
  setAutenticado(estado: boolean, rut: string | null = null) {
    this.usuarioAutenticadoSubject.next(estado);
    this.rutUsuarioSubject.next(rut);

    if (estado && rut) {
      this.supabaseService.getUsuarioByRut(+rut).subscribe({
        next: (usuario) => {
          if (usuario && usuario.length > 0) {
            this.nombreUsuarioSubject.next(usuario[0].nombre);
            this.usuarioActualSubject.next(usuario[0]);
          } else {
            this.nombreUsuarioSubject.next(null);
            this.usuarioActualSubject.next(null);
          }
        },
        error: (err) => {
          console.error('Error al obtener el usuario por RUT:', err);
          this.nombreUsuarioSubject.next(null);
          this.usuarioActualSubject.next(null);
        },
      });
    } else {
      this.nombreUsuarioSubject.next(null);
      this.usuarioActualSubject.next(null);
    }
  }

  // Método para verificar si la sesión ha expirado
  async isDateExpired(): Promise<boolean> {
    const userData = await this.getDecryptedUserData();
    if (userData?.expiration && Date.now() < userData.expiration) {
      console.log('Usuario dentro del tiempo de expiración');
      return false; // La sesión es válida si el tiempo actual es menor a la expiración
    }
    console.log('Usuario fuera del tiempo de expiración');
    await this.cerrarSesion(); // Si ya pasó el tiempo, desloguea
    return true;
  }

  // Método para obtener el estado de autenticación (boolean)
  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.value; // Devuelve el valor actual
  }

  // Método para obtener el RUT del usuario
  obtenerRutUsuario(): Observable<string | null> {
    return this.rutUsuarioSubject.asObservable();
  }

  // Método para obtener el nombre del usuario
  obtenerNombreUsuario(): Observable<string | null> {
    return this.nombreUsuarioSubject.asObservable(); // Retorna un Observable del nombre
  }

  // Método para obtener el usuario actual
  obtenerUsuarioActual(): Observable<Usuario | null> {
    return this.usuarioActualSubject.asObservable();
  }

  // Método para desencriptar los datos del usuario almacenados en el dispositivo
  async getDecryptedUserData() {
    const { value } = await Preferences.get({ key: 'userData' });
    if (value) {
      try {
        const bytes = CryptoJS.AES.decrypt(value, environment.apiKeySupabase);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
      } catch (e) {
        console.error(e);
        this.cerrarSesion();
      }
    }
    return null;
  }

  // Método para cerrar sesión
  async cerrarSesion() {
    this.setAutenticado(false); // Cambiar el estado de autenticación
    this.rutUsuarioSubject.next(null); // Limpiar el RUT al cerrar sesión
    this.nombreUsuarioSubject.next(null); // Limpiar el nombre al cerrar sesión
    this.usuarioActualSubject.next(null); // Limpiar el usuario actual
    

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
