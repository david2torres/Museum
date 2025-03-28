/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * NIVEL DE REPOSITORIO: Manjea Unicamente la conexion y trae datos de API
 * no debe realizar ningun proceso logico
 */
import { Injectable } from '@angular/core';
import {
  IChangePassword,
  IUserLoginRequest,
  IUserLoginRespone,
} from '@DomainInterfaces/userAuth.interface';
// import { tap } from 'rxjs';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environment/environment';
//import { simulatedResponse } from '@DomainConstants/mocks/simulateServices.constants';
import { AbstractUserAuthUseCases } from '@DomainUsesCases/UserAuthUseCases.abstract';
import { simulatedResponse } from '@DomainConstants/mocks/simulateServices.constants';
import { ApiService } from '../api/api.service';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthRepository extends AbstractUserAuthUseCases {
  private apiUrl = environment.auth;

  constructor(
    private http: ApiService,
    private secureStorage: SecureStorageService,
  ) {
    super();
  }

  public login(email: string, password: string): Observable<IUserLoginRespone> {
    const body: IUserLoginRequest = {
      email: email,
      password: password,
    };
    return this.http
      .post<IUserLoginRespone>(this.apiUrl.login, body, simulatedResponse)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched uploadFileData');
        }),
        catchError(error => this.handleError('uploadFileData', error)),
      );
  }

  public Logout(): Observable<any> {
    const url = `${this.apiUrl.Logout}${APP_CONST.SESSION.end}${this.secureStorage.getItem(STORAGE_CONST.idSession)}`;
    return this.http.post<IUserLoginRespone>(url, simulatedResponse).pipe(
      tap(row => {
        console.log('Response Service', row);
        this.log('fetched uploadFileData');
      }),
      catchError(error => this.handleError('uploadFileData', error)),
    );
  }

  public sendResetLink(email: string): Observable<void> {
    console.log(email);
    const url = `${this.apiUrl.sendEmail}`;
    const body = {
      emailUsuario: email,
    };
    return this.http.post<IUserLoginRespone>(url, body).pipe(
      tap(row => {
        console.log('Response sendResetLink', row);
        this.log('fetched sendResetLink');
      }),
      catchError(error => this.handleError('sendResetLink', error)),
    );
  }

  public changePassword(body: IChangePassword): Observable<void> {
    console.log('Change Password Body Add Services', body);
    const url = this.apiUrl.changePassword;
    return this.http.put<IUserLoginRespone>(url, body).pipe(
      tap(row => {
        console.log('Response changePassword', row);
        this.log('fetched changePassword');
      }),
      catchError(error => this.handleError('changePassword', error)),
    );
  }

  private handleError(operation = 'operation', result?: any) {
    console.error('ERROR', operation, result.message);
    return of(result);
  }

  public log(message: string) {
    return message;
  }
}
