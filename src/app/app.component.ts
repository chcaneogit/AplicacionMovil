import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './service/autenticacion/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  usuarioNombre: string | null = null;
  usuarioAutenticado: boolean = false; // Variable para almacenar el estado de autenticación

  // Propiedades para el acordeón
  mostrarReportes: boolean = false;

  constructor(
    private _authService: AutenticacionService,
    private router: Router,
  ) {}

  ngOnInit() {
    this._authService.obtenerNombreUsuario().subscribe(nombre => {
      this.usuarioNombre = nombre ? `Hola ${nombre}` : null;
    });

    // Suscribirse al estado de autenticación
    this._authService.estaAutenticado().subscribe(estado => {
      this.usuarioAutenticado = estado; // Actualiza la variable local
    });
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

  irRegistro() {
    this.router.navigate(['/registro']);
  }

  cerrarSesion() {
    this._authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

  irReportes() {
    this.router.navigate(['/ver-reporte']);
  }

  irRegistroReporte() {
    this.router.navigate(['/reportes'])
  }

  // Método para alternar la visualización del acordeón
  toggleReportes() {
    this.mostrarReportes = !this.mostrarReportes;
  }
}
