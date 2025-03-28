/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { SIDE_MODULES } from './sideMenuModule';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { Subject, takeUntil } from 'rxjs';
import {
  Entidade,
  entidadRolesFuncionalidad,
  Funcionalidade,
} from '@DomainInterfaces/userAuth.interface';
import { MENU_ICONS } from '@DomainConstants/shared/icons-images.constants';
import { HOME_MENU } from '@DomainConstants/sideBar/side-bar.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { Router } from '@angular/router';
import { GeneralService } from '@services/general-service.service';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [...SIDE_MODULES],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit, OnDestroy {
  public NAVIGATE_TO = NAVIGATION_TO;
  public ICON_IMAGES = MENU_ICONS;
  public isMenuExpanded: boolean = false;
  private _unSubscribe = new Subject<void>();
  public menuItems = signal<entidadRolesFuncionalidad[]>([]);
  public selectedMenuItem = signal<number>(0);

  constructor(
    private authService: AuthService,
    public router: Router,
    private generalService: GeneralService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.getEntitySelected();
    this.setPathMenu();
  }

  private setPathMenu(): void {
    this.generalService.getGlobalPath.subscribe(resp => {
      const id = this.menuItems().filter(menu => resp.includes(menu.ruta))[0]
        ?.id;
      this.selectedMenuItem.update(() => id);
    });
  }

  private getEntitySelected(): void {
    this.authService.getEntitySelectedUser
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((entities: Entidade) => {
        console.log('init emmit', entities);
        const menuSession = JSON.parse(
          this.secureStorage.getItem(STORAGE_CONST.menu),
        );
        const menuOption = menuSession || entities.modulos;
        this.menuItems.update(() => [HOME_MENU, ...menuOption]);
        console.log(this.menuItems());
      });
  }

  public toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  public selectMenuItem(
    item: number,
    path: string,
    functionalities: Funcionalidade[],
  ): void {
    console.log('Changed Menus SideBar', functionalities);
    this.selectedMenuItem.update(() => item);
    this.secureStorage.setItem(
      STORAGE_CONST.functionalities,
      JSON.stringify(functionalities),
    );
    this.secureStorage.setItem(
      STORAGE_CONST.pestanas,
      JSON.stringify(functionalities[0].pestanas),
    );
    this.router.navigate([path]);
  }

  public navigateToLogin(): void {
    this.authService.navigateToLogin();
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
