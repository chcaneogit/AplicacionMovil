import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AutentificacionService } from './service/autentificacion/autentificacion.service';
import { MenuController } from '@ionic/angular';  // Importa el controlador del menú
import { UsuariosService } from './service/usuarios/usuarios.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuDisabled: boolean = false; // Nueva variable para controlar si el menu esta deshabilitado

  constructor(
    private _authService: AutentificacionService,
    private router: Router,
    private menuCtrl: MenuController,
    private _usuarioService: UsuariosService
  ) {
     // Suscríbete al evento de cambio de navegación
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Define las rutas donde deseas cerrar el menú
        const rutasSinMenu = ['/login', '/home', '/dashboard'];
        if (rutasSinMenu.includes(this.router.url)) {
          this.menuCtrl.close();  // Cierra el menú en estas rutas
        } else {
          this.menuCtrl.open();   // Abre el menú en las demás rutas
        }
      }
    });
  }

  ngOnInit() {
    // Verifica el estado de autenticación al iniciar
    this.actualizarEstadoMenu();
  }

  actualizarEstadoMenu() {
    // Este método puede incluir lógica adicional si es necesario
  }

  estaAutenticado(): boolean {
    return this._authService.estaAutenticado();
  }

  irHome() {
    this.router.navigate(['/home']);
  }

  irLogin() {
    this.router.navigate(['/login']);
  }

  irPerfil() {
    this.router.navigate(['/dashboard']);
  }

  cerrarSesion() {
    this._authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
