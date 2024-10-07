import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController } from '@ionic/angular';
import { AutentificacionService } from 'src/app/service/autenticacion/autenticacion.service';

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
    private _authService: AutentificacionService // Inyectar el servicio de autenticación
  ) { }

  ngOnInit() { }

  async login(correo: string, password: string) {
    try {
      const response = await this.supabaseService.getUsuarioByCorreo(correo).toPromise();
      const usuario = response;

      if (usuario && usuario.length > 0) {
        const usuarioData = usuario[0];
        if (usuarioData.password === password) {
          console.info("Usuario Existe");
          this._authService.setAutenticado(true, usuarioData.rut); // Establece el estado de autenticación y el RUT
          this.router.navigate(['home'], {
            state: {
              usuario: correo
            }
          });
        } else {
          console.error("Contraseña incorrecta");
          await this.presentAlert('Error', 'Contraseña incorrecta');
        }
      } else {
        console.error("Usuario No existe");
        await this.presentAlert('Error', 'El usuario no existe');
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      await this.presentAlert('Error', 'Ocurrió un error al intentar iniciar sesión');
    }
  }


  irRegistro() {
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
