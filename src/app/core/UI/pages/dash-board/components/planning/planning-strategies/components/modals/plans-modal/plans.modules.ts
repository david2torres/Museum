import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmActionModalComponent } from '@shared/components/modals/confirm-action-modal/confirm-action-modal.component';
import { ConfirmModalComponent } from '@shared/components/modals/confirm-modal/confirm-modal.component';
import { MultiselectCheckboxComponent } from '@shared/components/multiselect-checkbox/multiselect-checkbox.component';
import { NoInitSpacesDirective } from '@shared/directives/no-starting-spaces.directive';
import { NotFinishSpacesDirective } from '@shared/directives/not-finish-spaces.directive';
import { PermissionDirective } from '@shared/directives/permission.directive';

export const PLANS_MODAL_MODULES = [
  ConfirmActionModalComponent,
  TranslateModule,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  ConfirmModalComponent,
  MultiselectCheckboxComponent,
  NoInitSpacesDirective,
  NotFinishSpacesDirective,
  PermissionDirective,
];
