import { Routes } from '@angular/router';
import { GeneralManagementComponent } from './generalManagement.component';
import { PlanningStrategiesComponent } from '@pages/dash-board/components/planning/planning-strategies/planning-strategies.component';
import { ManageProjectsComponent } from '@pages/dash-board/components/planning/manage-projects/manage-projects.component';
import { ReportsPlaningComponent } from '@pages/dash-board/components/planning/reports-planning/reports-planing.component';
import { DownloadReportsComponent } from '@pages/dash-board/components/planning/download-reports/download-reports.component';
import { PATHS } from '@DomainConstants/shared/paths.constants';

export const GENERAL_MANAGEMENT_ROUTES: Routes = [
  {
    path: PATHS.MANGEMENT.PLANNING.planning,
    component: GeneralManagementComponent,
    children: [
      {
        path: PATHS.EMPTY,
        redirectTo: PATHS.MANGEMENT.PLANNING.strategies,
        pathMatch: 'full',
      },
      {
        path: PATHS.MANGEMENT.PLANNING.strategies,
        component: PlanningStrategiesComponent,
      },
      {
        path: PATHS.MANGEMENT.PLANNING.manageProjects,
        component: ManageProjectsComponent,
      },
      {
        path: PATHS.MANGEMENT.PLANNING.reports,
        component: ReportsPlaningComponent,
      },
      {
        path: PATHS.MANGEMENT.PLANNING.downloadReport,
        component: DownloadReportsComponent,
      },
      {
        path: PATHS.GENERIC,
        redirectTo: PATHS.MANGEMENT.PLANNING.strategies,
      },
    ],
  },
];
