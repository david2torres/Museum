import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  CARDS_IMAGES,
  ICON_IMAGES,
  MENU_ICONS,
} from '@DomainConstants/shared/icons-images.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  Entidade,
  entidadRolesFuncionalidad,
  Funcionalidade,
} from '@DomainInterfaces/userAuth.interface';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  public ICON_IMAGES = ICON_IMAGES;
  public CARDS_IMAGES = CARDS_IMAGES;
  public CARDS_ICONS = MENU_ICONS;
  public menuItems = signal<entidadRolesFuncionalidad[]>([]);
  public userName = signal<string>('');
  public userRol = signal<string>('');
  private _unSubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.getEntitySelected();
    this.userName.update(() =>
      this.secureStorage.getItem(STORAGE_CONST.userName),
    );
    this.userRol.update(() =>
      this.secureStorage.getItem(STORAGE_CONST.userRol),
    );
    this.authService.setTitleRouter = this.router.url;
  }

  public navigateTo(
    selectFuncitionalitie: Funcionalidade,
    functionalities: Funcionalidade[],
  ): void {
    console.log('Navigate To Function')
    this.secureStorage.setItem(
      STORAGE_CONST.functionalities,
      JSON.stringify(functionalities),
    );
    this.secureStorage.setItem(
      STORAGE_CONST.pestanas,
      JSON.stringify(selectFuncitionalitie.pestanas),
    );
    this.router.navigate([selectFuncitionalitie.ruta]);
  }

  private getEntitySelected(): void {
    this.authService.getEntitySelectedUser
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((entities: Entidade) => {
        const menuSession = JSON.parse(
          this.secureStorage.getItem(STORAGE_CONST.menu),
        );
        const menuOption = menuSession || entities.modulos;
        this.menuItems.update(() => menuOption);
        console.log('Menu Home Coponent', this.menuItems());
      });
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
