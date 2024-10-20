import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion/autenticacion.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AutenticacionService);
  const router = inject(Router);

  const isAuthenticated = _authService.estaAutenticado();

  if (isAuthenticated) {
    // Si necesitas el usuario actual, puedes suscribirte aquí
    _authService.obtenerUsuarioActual().subscribe(user => {
      console.log("USER", user);
    });
    return true;
  }

  router.navigate(['/login']);
  return false;
};
