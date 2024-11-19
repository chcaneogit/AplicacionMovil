import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './service/autenticacion/autenticacion.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  usuarioNombre: string | null = null;
  usuarioAutenticado: boolean = false;
  mostrarReportes: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _authService: AutenticacionService,

    private router: Router,
  ) {}

  ngOnInit() {
    this._authService.usuarioAutenticado$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(estado => {
        this.usuarioAutenticado = estado;
      });

    this._authService.usuarioActualSubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(usuario => {
        this.usuarioNombre = usuario ? `Hola ${usuario.nombre}` : null;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
    this.router.navigate(['/reportes']);
  }

  toggleReportes() {
    this.mostrarReportes = !this.mostrarReportes;
  }
}
