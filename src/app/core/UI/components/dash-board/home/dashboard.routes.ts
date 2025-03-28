import { Routes } from '@angular/router';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { PATHS } from '@DomainConstants/shared/paths.constants';
import { HomeComponent } from '@pages/dash-board/components/home/home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: PATHS.EMPTY,
    children: [
      { path: PATHS.EMPTY, redirectTo: PATHS.ORIGIN.home, pathMatch: 'full' },
      { path: PATHS.ORIGIN.home, component: HomeComponent },
      {
        path: PATHS.DASHBOARD.management,
        loadChildren: () =>
          import('../general-management/generalManagement.routes').then(
            r => r.GENERAL_MANAGEMENT_ROUTES,
          ),
      },
      { path: PATHS.GENERIC, redirectTo: NAVIGATION_TO.BOARD },
    ],
  },
];
