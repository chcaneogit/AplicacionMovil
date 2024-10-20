import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/service/autenticacion/autenticacion.service';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = "";
  password: string = "";

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private alertController: AlertController,
    private _authService: AutenticacionService
  ) { }

  ngOnInit() { }

  resetForm() {
    this.correo = '';
    this.password = '';
  }

  login(correo: string, password: string) {
    this.supabaseService.getUsuarioByCorreo(correo).subscribe({
      next: async (usuario) => {
        if (usuario && usuario.length > 0) {
          const usuarioData = usuario[0];
          if (usuarioData && this.validatePassword(password, usuarioData.password)) { // Verificar la contraseña
            console.info("Usuario Existe");
            const userData = { expiration: Date.now() + 1 * 60 * 1000 };
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userData), environment.apiKeySupabase).toString();
            await Preferences.set({
              key: 'userData',
              value: encryptedData,
            });
            this._authService.setAutenticado(true, usuarioData.rut);
            this.resetForm();
            this.router.navigate(['home'], {
              state: { usuario: correo }
            });
          } else {
            console.error("Contraseña incorrecta");
            await this.presentAlert('Error', 'Contraseña incorrecta');
          }
        } else {
          console.error("Usuario No existe");
          await this.presentAlert('Error', 'El usuario no existe');
        }
      },
      error: async (error) => {
        console.error("Error al iniciar sesión", error);
        await this.presentAlert('Error', 'Ocurrió un error al intentar iniciar sesión');
      }
    });
  }

  validatePassword(inputPassword: string, storedPassword: string): boolean {
    // Implementar la lógica de comparación aquí, usando hashing si es posible
    return inputPassword === storedPassword;
  }

  irRegistro() {
    this.resetForm();
    this.router.navigate(['/registro']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
