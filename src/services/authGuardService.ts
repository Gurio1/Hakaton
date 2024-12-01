import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './LoginService';
import { inject } from '@angular/core';

export const AuthGuardService: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
