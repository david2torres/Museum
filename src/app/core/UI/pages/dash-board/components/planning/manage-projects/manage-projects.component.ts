import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { MANAGEMENT_MODULES } from './manageProjectsModule';
import { IPestanas } from '@DomainInterfaces/userAuth.interface';
import { MANAGEMENT_PROYECTS_MENU } from '@DomainConstants/components/management-menu.constants';
import { MENU_MANAGEMENT_PROJECT } from '@DomainConstants/components/management-projects.constants';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';

@Component({
  selector: 'manage-projects',
  standalone: true,
  imports: [...MANAGEMENT_MODULES],
  templateUrl: './manage-projects.component.html',
  styleUrl: './manage-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProjectsComponent implements OnInit {
  public componentMap = MANAGEMENT_PROYECTS_MENU;
  public initOption = signal<string>(MENU_MANAGEMENT_PROJECT.projects);
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
    this.initOption.update(() => modulesMenu[0].nombre);
    this.menu.update(() => modulesMenu);
    console.log('MENUS', modulesMenu, localMenu);
  }
}
