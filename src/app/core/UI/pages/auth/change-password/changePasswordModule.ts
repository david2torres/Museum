import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NotFinishSpacesDirective } from '@shared/directives/not-finish-spaces.directive';

export const CHANGE_PASSWORD_MODULES = [
  FormsModule,
  CommonModule,
  TranslateModule,
  ReactiveFormsModule,
  NotFinishSpacesDirective,
];
