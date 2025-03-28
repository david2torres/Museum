/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * NIVEL DE REPOSITORIO:  Manjea Unicamente la conexion y trae datos de API
 * no debe realizar ningun proceso logico
 */
import { Injectable } from '@angular/core';
import {
  evaluatorResponseSimulate,
  indicatorRequestSimulate,
  indicatorsResponseSimulate,
  lineamientosResponseSimulate,
  politicasResponseSimulate,
  //lineamientosResponseSimulate,
  //politicasResponseSimulate,
  strategicPlansResponse,
  tipoIndicadorSimulate,
  unidadesMedidasSimulate,
} from '@DomainConstants/mocks/simulateServices.constants';
import {
  ICategories,
  ICeateGuidelinesResponse,
  ICreateStrategicPlans,
  IEditEjeEstrategico,
  IEditGuidelineResponse,
  IEvaluadoresResponse,
  IGetGuidelinesResponse,
  IIndicadoresResponse,
  IPoliticasResponse,
  IStrategicPlansResponse,
  ITipoIndicador,
  ITypeIndicatorsRequest,
  IUnidadesMedida,
} from '@DomainInterfaces/planning.interface';
import { IUserLoginRespone } from '@DomainInterfaces/userAuth.interface';
import { AbstractPlanningUseCases } from '@DomainUsesCases/PlanningUseCases.abstract';
import { environment } from 'app/environment/environment';
import { catchError, Observable, of, tap } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PlanningRepository extends AbstractPlanningUseCases {
  private apiUrl = environment.planning;

  constructor(private apiHttp: ApiService) {
    super();
  }

  public getGuidelines(idMuseo: number): Observable<IGetGuidelinesResponse[]> {
    const url = `${this.apiUrl.getGuidelines}?idMuseo=${idMuseo}`;
    return this.apiHttp
      .get<IGetGuidelinesResponse[]>(url, lineamientosResponseSimulate)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched uploadFileData');
        }),
        catchError(error => this.handleError('uploadFileData', error)),
      );
  }

  public getStrategicPlans(
    idMuseo: number,
  ): Observable<IStrategicPlansResponse[]> {
    const url = `${this.apiUrl.getStrategicPlan}?idMuseo=${idMuseo}`;
    return this.apiHttp
      .get<IStrategicPlansResponse[]>(url, strategicPlansResponse)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched uploadFileData');
        }),
        catchError(error => this.handleError('uploadFileData', error)),
      );
  }

  public createGuideLine(
    bodyGuideline: ICeateGuidelinesResponse[],
  ): Observable<any> {
    const body: ICeateGuidelinesResponse[] = bodyGuideline;
    return this.apiHttp
      .post<ICeateGuidelinesResponse>(this.apiUrl.createGuidelines, body)
      .pipe(
        tap(row => {
          console.log('Response createGuideLine', row);
          this.log('fetched createGuideLine');
        }),
        catchError((error: any) => this.handleError('createGuideLine', error)),
      );
  }

  public editGuideline(bodyGuideline: IEditGuidelineResponse): Observable<any> {
    const body: IEditGuidelineResponse = { ...bodyGuideline[0] };
    return this.apiHttp
      .put<IEditGuidelineResponse>(this.apiUrl.editGuidelines, body)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched uploadFileData');
        }),
        catchError(error => this.handleError('uploadFileData', error)),
      );
  }

  public deleteGuidelines(idLineamiento: string): Observable<any> {
    const url = `${this.apiUrl.deleteGuidelines}${idLineamiento}`;
    console.log('Url delete guidelines', url);
    return this.apiHttp.delete<IUserLoginRespone>(url).pipe(
      tap(row => {
        console.log('Response Service', row);
        this.log('fetched uploadFileData');
      }),
      catchError(error => this.handleError('uploadFileData', error)),
    );
  }

  public deleteEjeStrategic(idEje: string): Observable<any> {
    const url = `${this.apiUrl.deleteEjeStrategic}${idEje}`;
    console.log('Url delete deleteEjeStrategic', url);
    return this.apiHttp.delete<IUserLoginRespone>(url).pipe(
      tap(row => {
        console.log('Response deleteEjeStrategic', row);
        this.log('fetched deleteEjeStrategic');
      }),
      catchError(error => this.handleError('deleteEjeStrategic', error)),
    );
  }

  public getEvaluators(idMuseo: number): Observable<IEvaluadoresResponse[]> {
    const url = `${this.apiUrl.getEvaluators}?idMuseo=${idMuseo}`;
    return this.apiHttp
      .get<IEvaluadoresResponse[]>(url, evaluatorResponseSimulate)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched uploadFileData');
        }),
        catchError(error => this.handleError('uploadFileData', error)),
      );
  }

  public getPolicies(): Observable<IPoliticasResponse[]> {
    const url = `${this.apiUrl.getPolicians}`;
    return this.apiHttp
      .get<IPoliticasResponse[]>(url, politicasResponseSimulate)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched getPolicies');
        }),
        catchError(error => this.handleError('getPolicies', error)),
      );
  }

  public createStrategicPlans(
    bodyStrategicPlan: ICreateStrategicPlans,
  ): Observable<any> {
    const body: ICreateStrategicPlans = bodyStrategicPlan;
    return this.apiHttp
      .post<ICreateStrategicPlans>(this.apiUrl.createStrategicPlan, body)
      .pipe(
        tap(row => {
          console.log('Response createStrategicPlan', row);
          this.log('fetched createStrategicPlan');
        }),
        catchError((error: any) =>
          this.handleError('createStrategicPlan', error),
        ),
      );
  }

  public editStrategicPlans(
    bodyStrategicPlan: ICreateStrategicPlans,
  ): Observable<any> {
    const body: ICreateStrategicPlans = bodyStrategicPlan;
    /**
     * Validate Loader Dynamic component Style
     */
    const url =
      bodyStrategicPlan.ejesEstrategicos.length > 0
        ? `${this.apiUrl.editStrategicPlan}`
        : `${this.apiUrl.editStrategicPlan}/?st=sm`;
    return this.apiHttp.put<ICreateStrategicPlans>(url, body).pipe(
      tap(row => {
        console.log('Response Edit StrategicPlan', row);
        this.log('fetched Edit StrategicPlan');
      }),
      catchError((error: any) => this.handleError('Edit StrategicPlan', error)),
    );
  }

  public editEjeStrategic(body: IEditEjeEstrategico): Observable<any> {
    /**
     * Validate Loader Dynamic component Style
     */
    const url =
      body.acciones.length > 0
        ? `${this.apiUrl.editEjeStrategic}`
        : `${this.apiUrl.editEjeStrategic}/?st=md`;
    return this.apiHttp.put<IEditEjeEstrategico>(url, body).pipe(
      tap(row => {
        console.log('Response Service', row);
        this.log('fetched uploadFileData');
      }),
      catchError(error => this.handleError('uploadFileData', error)),
    );
  }

  public getIndicators(): Observable<IIndicadoresResponse[]> {
    const url = `${this.apiUrl.getIndicators}`;
    return this.apiHttp
      .get<IIndicadoresResponse[]>(url, indicatorsResponseSimulate)
      .pipe(
        tap(row => {
          console.log('Response getIndicators', row);
          this.log('fetched getIndicators');
        }),
        catchError(error => this.handleError('getIndicators', error)),
      );
  }

  // Types Indicators
  public getTypeIndicators(): Observable<ITypeIndicatorsRequest[]> {
    const url = `${this.apiUrl.getTypeIndicators}`;
    return this.apiHttp
      .get<ITypeIndicatorsRequest[]>(url, indicatorRequestSimulate)
      .pipe(
        tap(row => {
          console.log('Response getTypeIndicators', row);
          this.log('fetched getTypeIndicators');
        }),
        catchError(error => this.handleError('getTypeIndicators', error)),
      );
  }

  public createTypeIndicators(
    bodyTypeIndicator: ITypeIndicatorsRequest,
  ): Observable<any> {
    const body: ITypeIndicatorsRequest = bodyTypeIndicator;
    return this.apiHttp
      .post<ITypeIndicatorsRequest>(this.apiUrl.createTypeIndicators, body)
      .pipe(
        tap(row => {
          console.log('Response createTypeIndicators', row);
          this.log('fetched createTypeIndicators');
        }),
        catchError((error: any) =>
          this.handleError('createTypeIndicators', error),
        ),
      );
  }

  public editTypeIndicators(
    bodyTypeIndicator: ITypeIndicatorsRequest,
  ): Observable<any> {
    const body: ITypeIndicatorsRequest = bodyTypeIndicator;
    return this.apiHttp
      .put<ITypeIndicatorsRequest>(this.apiUrl.editTypeIndicators, body)
      .pipe(
        tap(row => {
          console.log('Response editTypeIndicators', row);
          this.log('fetched editTypeIndicators');
        }),
        catchError((error: any) =>
          this.handleError('editTypeIndicators', error),
        ),
      );
  }

  public deleteTypeIndicators(idiTypeIndicator: string): Observable<any> {
    const url = `${this.apiUrl.deleteTypeIndicators}${idiTypeIndicator}`;
    console.log('Url delete deleteTypeIndicators', url);
    return this.apiHttp.delete<any>(url).pipe(
      tap(row => {
        console.log('Response Service', row);
        this.log('fetched deleteTypeIndicators');
      }),
      catchError(error => this.handleError('deleteTypeIndicators', error)),
    );
  }

  public getUnidadesMedida(): Observable<IUnidadesMedida[]> {
    const url = `${this.apiUrl.getUnidadesMedida}`;
    return this.apiHttp
      .get<IUnidadesMedida[]>(url, unidadesMedidasSimulate)
      .pipe(
        tap(row => {
          console.log('Response getUnidadesMedida', row);
          this.log('fetched getUnidadesMedida');
        }),
        catchError(error => this.handleError('getUnidadesMedida', error)),
      );
  }

  public getListaTiposIndicador(): Observable<ITipoIndicador[]> {
    const url = `${this.apiUrl.getListaTiposIndicador}`;
    return this.apiHttp.get<ITipoIndicador[]>(url, tipoIndicadorSimulate).pipe(
      tap(row => {
        console.log('Response getListaTiposIndicador', row);
        this.log('fetched getListaTiposIndicador');
      }),
      catchError(error => this.handleError('getListaTiposIndicador', error)),
    );
  }

  public getCategoriesIndicador(): Observable<ICategories[]> {
    const url = `${this.apiUrl.getCategoriesIndicador}`;
    return this.apiHttp.get<any[]>(url, tipoIndicadorSimulate).pipe(
      tap(row => {
        console.log('Response getCategoriesIndicador', row);
        this.log('fetched getCategoriesIndicador');
      }),
      catchError(error => this.handleError('getCategoriesIndicador', error)),
    );
  }

  public handleError(operation = 'operation', result?: any) {
    console.error('ERROR', operation, result.message);
    return of(result);
  }

  public log(message: string) {
    return message;
  }
}
