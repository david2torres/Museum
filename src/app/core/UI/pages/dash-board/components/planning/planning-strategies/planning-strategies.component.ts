/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { PLANNING_MODULES } from './planningStrategiesModule';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth-service.service';
import { IPestanas } from '@DomainInterfaces/userAuth.interface';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { STRATEGIC_PLAN_MENU } from '@DomainConstants/components/management-menu.constants';
import { MENU_STRATEGIC_PLANNING } from '@DomainConstants/components/planing.constants';

@Component({
  selector: 'planning-strategies',
  standalone: true,
  imports: [...PLANNING_MODULES],
  templateUrl: './planning-strategies.component.html',
  styleUrl: './planning-strategies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningStrategiesComponent implements OnInit {
  public componentMap = STRATEGIC_PLAN_MENU;
  public initOption = signal<string>(MENU_STRATEGIC_PLANNING.guidelines);
  public menu = signal<IPestanas[]>([]);

  constructor(
    private router: Router,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.authService.setTitleRouter = this.router.url;
    this.buildOption();
  }

  private buildOption(): void {
    const localMenu = JSON.parse(
      this.secureStorage.getItem(STORAGE_CONST.pestanas),
    );
    const modulesMenu: IPestanas[] = localMenu;
    this.menu.update(() => modulesMenu);
    this.initOption.update(() => modulesMenu[0].nombre);
    console.log('MENUS', modulesMenu, localMenu);
  }
}
