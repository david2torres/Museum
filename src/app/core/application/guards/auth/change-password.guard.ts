import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';

export const changePasswordGuard: CanActivateFn = route => {
  const router = inject(Router);
  const mode = route.params['mode'];
  const token = route.queryParams['token'];
  const userName = route.queryParams['userName'];

  if (mode === 'changePassword') {
    if (token && userName) {
      return true;
    }
    router.navigate([NAVIGATION_TO.LOGIN], { replaceUrl: true });
    return false;
  }
  return true;
};
