import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { ENTITIES_MODULES } from './entitiesModule';
import { Entidade } from '@DomainInterfaces/userAuth.interface';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  IAction_Auth,
  IAction_Menu,
} from '@DomainInterfaces/actionsState.interface';
import {
  setLogin,
  setMenu,
} from 'app/core/application/states/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'entities-component',
  standalone: true,
  imports: [...ENTITIES_MODULES],
  templateUrl: './entities.component.html',
  styleUrl: './entities.component.scss',
})
export class EntitiesComponent implements OnInit, OnDestroy {
  public ICON_IMAGES = ICON_IMAGES;
  public NAVIGATE_TO = NAVIGATION_TO;
  public entitiesUser = signal<Entidade[]>([]);
  public selectedCardIndex: number | null = null;
  private _unSubscribe = new Subject<void>();
  private _entitySelected: Entidade;

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    console.log('Start Entities', this.authService.getAuthToken());
    // console.log('Start Store', this.authService.setLocalData());
    this.getEntitiesUser();
  }

  private getEntitiesUser(): void {
    this.authService.getEntidadesUser
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((entities: Entidade[]) => {
        if (entities.length === 0) {
          this.router.navigate([this.NAVIGATE_TO.LOGIN]);
          return;
        }
        this.entitiesUser.update(() => entities);
        console.log('Entities', this.entitiesUser());
      });
  }

  public loginSubmit(): void {
    console.log(this.authService.getAuthToken());
    this.authService.setEntitySelectedUser = this._entitySelected;
    this.dispatchStorage(this._entitySelected);
    this.secureStorage.setItem(
      STORAGE_CONST.menu,
      JSON.stringify(this._entitySelected.modulos),
    );
    this.router.navigate([this.NAVIGATE_TO.BOARD]);
  }

  private dispatchStorage(entidad: Entidade): void {
    const dataStore: IAction_Auth = {
      token: this.secureStorage.getItem(STORAGE_CONST.token),
      userName: this.secureStorage.getItem(STORAGE_CONST.userName),
      role: entidad.roles[0].nombre,
      idMuseo: entidad.id,
    };

    const menu: IAction_Menu = {
      modulos: entidad.modulos,
    };
    this.store.dispatch(setLogin(dataStore));
    this.store.dispatch(setMenu(menu));
  }

  public navigateToLogin(): void {
    this.authService.navigateToLogin();
  }

  public onCardSelected(index: number, entity: Entidade): void {
    this._entitySelected = entity;
    this.selectedCardIndex = index;
    this.secureStorage.setItem(STORAGE_CONST.idMuseum, String(entity.id));
    this.secureStorage.setItem(STORAGE_CONST.nameMuseum, entity.nombre);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
