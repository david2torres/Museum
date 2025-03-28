/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * NIVEL DE SERVICIO
 *  Recibe datos realizados por medio de la peticion https de UserAuthRepository
 *  maneja toda la manipulacion y Almacenamiento de datos
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  Entidade,
  IChangePassword,
  IUserLoginRespone,
} from '@DomainInterfaces/userAuth.interface';
import {
  IAuthReturnValue,
  IAutResponseType,
} from '@DomainConstants/types/auth.types';
import { NavigationStart, Router } from '@angular/router';
import { setLogout } from 'app/core/application/states/actions/auth.actions';
import { Store } from '@ngrx/store';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { UserAuthRepository } from '../repositories/user-auth-repository.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: string | null = null;
  private _entitiesUser = new BehaviorSubject<Entidade[]>([]);
  private _entitySelected = new BehaviorSubject<Entidade>(null);
  private _urlTitle = new BehaviorSubject<string>('');
  public NAVIGATE_TO = NAVIGATION_TO;

  constructor(
    private store: Store,
    private userAuthUseCases: UserAuthRepository,
    private router: Router,
    private secureStorage: SecureStorageService,
  ) {}

  public login(email: string, password: string): Observable<IAuthReturnValue> {
    return this.userAuthUseCases
      .login(email, password)
      .pipe(
        map((response: IUserLoginRespone) => this._normalizeData(response)),
      );
  }

  public logout(): Observable<any> {
    return this.userAuthUseCases.Logout();
  }

  private _normalizeData(data: IAutResponseType): IAuthReturnValue {
    if ('error' in data) {
      return data;
    } else {
      console.log('dara', data);
      this.setLocalData(
        data.nombreUsuario,
        data.museos,
        data.idSesion,
        data.emailUsuario,
        data.area.nombre,
      );
      this.authToken = data.token;
      this.secureStorage.setItem(STORAGE_CONST.token, this.authToken);
      return {
        mensaje: data.mensaje,
        entidades: data.museos,
      };
    }
  }

  public sendResetLink(email: string): Observable<void> {
    return this.userAuthUseCases.sendResetLink(email);
  }

  public changePassword(body: IChangePassword): Observable<void> {
    return this.userAuthUseCases.changePassword(body);
  }

  public getAuthToken(): string | null {
    return this.authToken ?? this.secureStorage.getItem(STORAGE_CONST.token);
  }

  public isAuthenticated(): Observable<boolean> {
    const isAuth =
      !!this.secureStorage.getItem(STORAGE_CONST.token) || !!this.authToken;
    return of(isAuth);
  }

  public set setEntidadesUser(entidad: Entidade[]) {
    this._entitiesUser.next(entidad);
  }

  public get getEntidadesUser(): Observable<Entidade[]> {
    return this._entitiesUser.asObservable();
  }

  public set setEntitySelectedUser(entidad: Entidade) {
    this._entitySelected.next(entidad);
  }

  public get getEntitySelectedUser(): Observable<Entidade> {
    return this._entitySelected.asObservable();
  }

  /**
   * Set Title Header to module stand
   */

  public set setTitleRouter(url: string) {
    this._urlTitle.next(url);
  }

  public get getTitleRouter(): Observable<string> {
    return this._urlTitle.asObservable();
  }

  public navigateToLogin(): void {
    this.store.dispatch(setLogout());
    this.secureStorage.clear();
    this.logout().subscribe(resp => console.log('Success Logout: ', resp));
    this.router.navigate([this.NAVIGATE_TO.LOGIN]);
    this.clearHistory();
  }

  private clearHistory(): void {
    let currentUrl = this.router.url;
    history.pushState(null, '', location.href);
    window.onpopstate = () => {
      history.go(1);
    };
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: any) => {
        if (event.url !== currentUrl) {
          history.replaceState({}, '', currentUrl);
        } else {
          currentUrl = event.url;
        }
      });
  }

  private setLocalData(
    userName: string,
    rol: Entidade[],
    idSesion: string,
    emailUsuario: string,
    userArea: string,
  ): void {
    this.secureStorage.setItem(STORAGE_CONST.userName, userName);
    this.secureStorage.setItem(STORAGE_CONST.idSession, idSesion);
    this.secureStorage.setItem(STORAGE_CONST.userEmail, emailUsuario);
    this.secureStorage.setItem(STORAGE_CONST.userRol, rol[0]?.roles[0]?.nombre);
    this.secureStorage.setItem(STORAGE_CONST.userArea, userArea);
  }
}
