import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyComponentComponent } from '@shared/components/empty-component/empty-component.component';
import { PlansModalComponent } from '../modals/plans-modal/plans-modal.component';
import { CapitalizeFirstPipe } from '@shared/pipes/capitalize-first-pipe.pipe';
import { PermissionDirective } from '@shared/directives/permission.directive';

export const PLANS_MODULES = [
  TranslateModule,
  CommonModule,
  EmptyComponentComponent,
  PlansModalComponent,
  CapitalizeFirstPipe,
  PermissionDirective,
];
