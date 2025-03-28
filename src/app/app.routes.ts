import { Routes } from '@angular/router';
import { AuthComponent } from './core/UI/components/auth/auth.component';
import { AuthGuard } from './core/application/guards/auth/auth.guard';
import { changePasswordGuard } from './core/application/guards/auth/change-password.guard';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { PATHS } from '@DomainConstants/shared/paths.constants';

export const routes: Routes = [
  { path: '', redirectTo: NAVIGATION_TO.LOGIN, pathMatch: 'full' },
  {
    path: PATHS.ORIGIN.modes,
    component: AuthComponent,
    canActivate: [changePasswordGuard],
  },
  {
    path: PATHS.ORIGIN.dashboard,
    loadComponent: () =>
      import('./core/UI/components/dash-board/home/dash-board.component').then(
        c => c.DashBoardComponent,
      ),
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./core/UI/components/dash-board/home/dashboard.routes').then(
        r => r.DASHBOARD_ROUTES,
      ),
  },
  { path: '**', redirectTo: NAVIGATION_TO.LOGIN },
];
