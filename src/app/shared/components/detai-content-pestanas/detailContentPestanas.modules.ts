import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyComponentComponent } from '@shared/components/empty-component/empty-component.component';
import { CapitalizeFirstPipe } from '@shared/pipes/capitalize-first-pipe.pipe';
import { PermissionDirective } from '@shared/directives/permission.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CloseOutsideDirective } from '@shared/directives/close-outside.directive';
import { NoInitSpacesDirective } from '@shared/directives/no-starting-spaces.directive';
import { NotFinishSpacesDirective } from '@shared/directives/not-finish-spaces.directive';
import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';

export const DETAIL_PESTANAS_MODULES = [
  TranslateModule,
  CommonModule,
  EmptyComponentComponent,
  CapitalizeFirstPipe,
  PermissionDirective,
  ReactiveFormsModule,
  FormsModule,
  CloseOutsideDirective,
  NoInitSpacesDirective,
  NotFinishSpacesDirective,
  ConfirmModalComponent
];
