import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class isExpiredTimeGuard implements CanActivate {
  constructor(
    private authService: AutenticacionService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    const expired = await this.authService.isDateExpired();
    if (!expired) {
      return true;
    } else {
      this.authService.cerrarSesion();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
