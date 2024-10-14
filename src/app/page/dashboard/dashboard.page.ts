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

  usuario: Usuario | undefined;
  private userSubscription: Subscription | undefined;
  private authSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private _authService: AutenticacionService,
    private _supabaseService: SupabaseService
  ) { }

  ngOnInit() {
    // Suscribirse al estado de autenticación y al RUT del usuario
    this.authSubscription = this._authService.estaAutenticado().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this._authService.obtenerRutUsuario().subscribe(rut => {
          if (rut) {
            this.userSubscription = this._supabaseService.getUsuarioByRut(+rut).subscribe(
              response => {
                if (response && response.length > 0) {
                  this.usuario = response[0]; // Asumimos que la respuesta es un array y tomamos el primer elemento
                  console.log(this.usuario);
                } else {
                  console.error('Usuario no encontrado');
                  this.router.navigate(['/login']); // Redirigir si no se encuentra el usuario
                }
              },
              error => {
                console.error('Error al obtener el usuario:', error);
                this.router.navigate(['/login']); // Redirigir en caso de error
              }
            );
          } else {
            console.error('RUT no encontrado');
            this.router.navigate(['/login']); // Redirigir si no hay RUT
          }
        });
      } else {
        this.router.navigate(['/login']); // Redirigir si no está autenticado
      }
    });
  }

  ngOnDestroy() {
    // Cancelar suscripciones para evitar fugas de memoria
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
