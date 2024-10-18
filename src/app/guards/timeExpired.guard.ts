import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion/autenticacion.service';

export const isExpiredTimeGuard: CanActivateFn = async (route, state) => {
  const _authService = inject(AutenticacionService);

  const router = inject(Router);

  const userTimeExpired = await _authService.isDateExpired();

  if (userTimeExpired) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
