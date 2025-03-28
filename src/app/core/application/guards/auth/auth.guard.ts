import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '@services/auth-service.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public NAVIGATE_ROUTES = NAVIGATION_TO;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    console.log('DashBoard', route, state);
    return this.authService.isAuthenticated().pipe(
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate([this.NAVIGATE_ROUTES.LOGIN], {
            replaceUrl: true,
          });
        }
        return isAuthenticated;
      }),
      catchError(() => {
        this.router.navigate([this.NAVIGATE_ROUTES.LOGIN], {
          replaceUrl: true,
        });
        return new Observable<boolean>(observer => observer.next(false));
      }),
    );
  }
}
