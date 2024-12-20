import {CanActivateFn} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';
import {inject} from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  return authService.professionalInfo?.professional.roles == 'ADMINISTRATEUR';
}
