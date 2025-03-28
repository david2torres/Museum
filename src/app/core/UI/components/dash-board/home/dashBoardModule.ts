import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from '@pages/dash-board/side-menu/side-menu.component';
import { HeaderComponent } from '@shared/components/header/header.component';

export const DASHBOARD_MODULES = [
  RouterModule,
  HeaderComponent,
  TranslateModule,
  SideMenuComponent,
];
