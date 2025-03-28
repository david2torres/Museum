/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'app/environment/environment';
import { Observable, of, tap } from 'rxjs';
import { AbstractsGeneralUseCases } from '@DomainUsesCases/generalUseCases.abstract';
import { INACTIVITY_CONST } from '@shared/models/constants/general-service/inactivity.constants';

@Injectable({
  providedIn: 'root',
})
export class GeneralRepository extends AbstractsGeneralUseCases {
  private apiUrl = environment.configuration;

  constructor(private apiHttp: ApiService) {
    super();
  }

  public getTimeOut(): Observable<number> {
    const url = `${this.apiUrl.timeOut}`;
    return this.apiHttp.get<number>(url, INACTIVITY_CONST.defaulTime).pipe(
      tap(row => {
        console.log('Response TimeOut', row);
        this.log('fetched TimeOut');
      }),
    );
  }

  public handleError(operation = 'operation', result?: any) {
    console.error('ERROR', operation, result?.message);
    return of(result);
  }

  public log(message: string) {
    return message;
  }
}
