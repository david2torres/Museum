import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { EntitiesComponent } from '@pages/auth/entities/entities.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { ResetLinkComponent } from '@pages/auth/sendResetLink/send-reset-link.component';
import { DashBoardComponent } from '../dash-board/home/dash-board.component';
import { ChangePasswordComponent } from '@pages/auth/change-password/change-password.component';

export const AUTH_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule,
  LoginComponent,
  ResetLinkComponent,
  EntitiesComponent,
  DashBoardComponent,
  ChangePasswordComponent,
];
