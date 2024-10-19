import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion/autenticacion.service';

export const isAuthenticatedGuard: CanActivateFn = async (route, state) => {
  const _authService = inject(AutenticacionService);
  const router = inject(Router);

  const userInfo = await _authService.estaAutenticado();
  console.log("USER",_authService.obtenerUsuarioActual())

  if (userInfo) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
