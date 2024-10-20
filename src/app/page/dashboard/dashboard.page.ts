import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion/autenticacion.service';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { Usuario } from 'src/app/models/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  usuario: Usuario | null = null;
  private userSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private _authService: AutenticacionService,
    private _supabaseService: SupabaseService
  ) {}

  ngOnInit() {
    // Suscribirse al usuario actual para actualizaciones en tiempo real
    this._authService.obtenerUsuarioActual().subscribe(usuario => {
      this.usuario = usuario; // Actualiza el usuario en el dashboard
    });

    // Cargar el usuario al inicio
    this.cargarUsuario();
  }

  cargarUsuario() {
    this._authService.obtenerRutUsuario().subscribe(rut => {
      if (rut) {
        this._supabaseService.getUsuarioByRut(+rut).subscribe(response => {
          this.usuario = response[0];
        }, error => {
          console.error('Error al cargar el usuario:', error);
          this.router.navigate(['/login']);
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  navegarAEditarPerfil() {
    this.router.navigate(['/editar-perfil']);
  }

  ngOnDestroy() {
    // Cancelar suscripciones para evitar fugas de memoria
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
