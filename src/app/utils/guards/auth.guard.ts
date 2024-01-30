import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//     return false;
// };

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkUserSession();
  }

  private checkUserSession(): boolean | UrlTree {
    const userSession = localStorage.getItem('user');

    if (userSession) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
