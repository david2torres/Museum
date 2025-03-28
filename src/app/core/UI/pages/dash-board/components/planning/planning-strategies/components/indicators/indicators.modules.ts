import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyComponentComponent } from '@shared/components/empty-component/empty-component.component';
import { IndicatorsModalComponent } from '../modals/indicators-modal/indicators-modal.component';
import { PermissionDirective } from '@shared/directives/permission.directive';

export const INDICATORS_MODULES = [
  TranslateModule,
  CommonModule,
  EmptyComponentComponent,
  IndicatorsModalComponent,
  PermissionDirective,
];
