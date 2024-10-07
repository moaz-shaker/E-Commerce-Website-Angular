import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

export const adminGuard: CanActivateFn = (next: any) => {
  const router = inject(Router);
  const notifierService = inject(NotifierService);
  if (localStorage.getItem('username') === next.data.role) {
    return true;
  } else {
    router.navigate(['/home']);
    notifierService.notify('error', 'register with name admin');
    return false;
  }
};
