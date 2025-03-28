import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyComponentComponent } from '@shared/components/empty-component/empty-component.component';
import { GuidelinesModalComponent } from '../modals/guidelines-modal/guidelines-modal.component';
import { PermissionDirective } from '@shared/directives/permission.directive';

export const GUIDElINES_MODULES = [
  TranslateModule,
  CommonModule,
  EmptyComponentComponent,
  GuidelinesModalComponent,
  PermissionDirective,
];
