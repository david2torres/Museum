import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DetailContentPestanasComponent } from '@shared/components/detai-content-pestanas/detail-content-pestanas.component';
import { ConfirmActionModalComponent } from '@shared/components/modals/confirm-action-modal/confirm-action-modal.component';
import { ConfirmModalComponent } from '@shared/components/modals/confirm-modal/confirm-modal.component';
import { MultiselectCheckboxComponent } from '@shared/components/multiselect-checkbox/multiselect-checkbox.component';
import { NoInitSpacesDirective } from '@shared/directives/no-starting-spaces.directive';
import { NotFinishSpacesDirective } from '@shared/directives/not-finish-spaces.directive';
import { PermissionDirective } from '@shared/directives/permission.directive';
import { CreateProductComponent } from '../create-product/create-product.component';
import { CurrencyFormatDirective } from '@shared/directives/currency-format-directive.directive';
import { CurrencyFormatPipe } from '@shared/pipes/currency-format.pipe';

export const PROJECT_MODAL_MODULES = [
  ConfirmActionModalComponent,
  DetailContentPestanasComponent,
  CreateProductComponent,
  TranslateModule,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  ConfirmModalComponent,
  MultiselectCheckboxComponent,
  NoInitSpacesDirective,
  NotFinishSpacesDirective,
  PermissionDirective,
  CurrencyFormatDirective,
  CurrencyFormatPipe
];
