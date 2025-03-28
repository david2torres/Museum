import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DownloadReportsComponent } from '@pages/dash-board/components/planning/download-reports/download-reports.component';
import { ManageProjectsComponent } from '@pages/dash-board/components/planning/manage-projects/manage-projects.component';
import { PlanningStrategiesComponent } from '@pages/dash-board/components/planning/planning-strategies/planning-strategies.component';
import { ReportsPlaningComponent } from '@pages/dash-board/components/planning/reports-planning/reports-planing.component';

export const GENERAL_MANAGEMENT_MODULE = [
  CommonModule,
  RouterModule,
  PlanningStrategiesComponent,
  DownloadReportsComponent,
  ManageProjectsComponent,
  ReportsPlaningComponent,
];
