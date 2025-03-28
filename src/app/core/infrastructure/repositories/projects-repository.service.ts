/**
 * NIVEL DE REPOSITORIO:  Manjea Unicamente la conexion y trae datos de API
 * no debe realizar ningun proceso logico
 */
import { Injectable } from '@angular/core';
import {
  IAliados,
  IAreasPorMuseo,
  IComunidades,
  ICreateProject,
  IDepartamentos,
  IDynamicListPorjects,
  IEstadosProyectos,
  IGenericList,
  IGrupoEtario,
  IProducto,
  IProjects,
  IProjectsComponent,
  ISaveSeguimiento,
  ISeguimientoResponse,
  ITipoAporte,
  ITipologias,
} from '@DomainInterfaces/projectManagement.interface';
import { AbstractProjectsMangement } from '@DomainUsesCases/projectManagementUseCases';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { environment } from 'app/environment/environment';
import { catchError, Observable, of, tap } from 'rxjs';
import { ApiService } from '../api/api.service';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  aliadoList,
  areasProjects,
  colaborationProjectSimulate,
  comunidadProjects,
  departamentoProjects,
  evaluationProjectSimulate,
  generalDynamicListForm,
  grupoEtarioProjects,
  projectSimulate,
  returnCreateProject,
  rubroList,
  seguimientoProject,
  stateProjects,
  tipoAporte,
  tipologiaProjects,
} from '@DomainConstants/mocks/simulateServices.constants';
@Injectable({
  providedIn: 'root',
})
export class ProjectsRepositoryService extends AbstractProjectsMangement {
  private apiUrl = environment.projects;
  private userEmail: string;
  private idMuseo: string;

  constructor(
    private apiHttp: ApiService,
    private secureStorage: SecureStorageService,
  ) {
    super();
  }

  private getUserInfo(): void {
    this.userEmail = this.secureStorage.getItem(STORAGE_CONST.userEmail);
    this.idMuseo = this.secureStorage.getItem(STORAGE_CONST.idMuseum);
  }

  public getProjects(): Observable<IProjectsComponent[]> {
    this.getUserInfo();
    const url = `${this.apiUrl.getProjects}?emailUsuario=${this.userEmail}&idMuseo=${this.idMuseo}`;
    return this.apiHttp.get<IProjectsComponent[]>(url, projectSimulate).pipe(
      tap(row => {
        console.log('Response Service', row);
        this.log('fetched getProjects');
      }),
      catchError(error => this.handleError('getProjects', error)),
    );
  }

  public getCollaborationProjects(): Observable<IProjectsComponent[]> {
    this.getUserInfo();
    const url = `${this.apiUrl.getColaborationProjects}?emailUsuario=${this.userEmail}`;
    return this.apiHttp
      .get<IProjectsComponent[]>(url, colaborationProjectSimulate)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched getCollaborationProjects');
        }),
        catchError(error =>
          this.handleError('getCollaborationProjects', error),
        ),
      );
  }

  public getEvaluationProjects(): Observable<IProjectsComponent[]> {
    this.getUserInfo();
    const url = `${this.apiUrl.getEvaluationProjects}?emailUsuario=${this.userEmail}&idMuseo=${this.idMuseo}`;
    return this.apiHttp
      .get<IProjectsComponent[]>(url, evaluationProjectSimulate)
      .pipe(
        tap(row => {
          console.log('Response Service', row);
          this.log('fetched getEvaluationProjects');
        }),
        catchError(error => this.handleError('getEvaluationProjects', error)),
      );
  }

  public getStatesProjects(): Observable<IEstadosProyectos[]> {
    const url = `${this.apiUrl.getStatesProjects}`;
    return this.apiHttp.get<IEstadosProyectos[]>(url, stateProjects).pipe(
      tap(row => {
        console.log('Response getStateProjects', row);
        this.log('fetched getStateProjects');
      }),
      catchError(error => this.handleError('getStateProjects', error)),
    );
  }

  public getAreas(): Observable<IAreasPorMuseo[]> {
    const url = `${this.apiUrl.getAreas}/${this.idMuseo}`;
    return this.apiHttp.get<IAreasPorMuseo[]>(url, areasProjects).pipe(
      tap(row => {
        console.log('Response getAreas', row);
        this.log('fetched getAreas');
      }),
      catchError(error => this.handleError('getAreas', error)),
    );
  }

  public getTipologias(): Observable<ITipologias[]> {
    const url = `${this.apiUrl.getTipologias}`;
    return this.apiHttp.get<ITipologias[]>(url, tipologiaProjects).pipe(
      tap(row => {
        console.log('Response getTipologias', row);
        this.log('fetched getTipologias');
      }),
      catchError(error => this.handleError('getTipologias', error)),
    );
  }

  public getComunidades(): Observable<IComunidades[]> {
    const url = `${this.apiUrl.getComunidades}`;
    return this.apiHttp.get<IComunidades[]>(url, comunidadProjects).pipe(
      tap(row => {
        console.log('Response getComunidades', row);
        this.log('fetched getComunidades');
      }),
      catchError(error => this.handleError('getComunidades', error)),
    );
  }

  public getGrupoEtario(): Observable<IGrupoEtario[]> {
    const url = `${this.apiUrl.getGrupoEtario}`;
    return this.apiHttp.get<IGrupoEtario[]>(url, grupoEtarioProjects).pipe(
      tap(row => {
        console.log('Response getGrupoEtario', row);
        this.log('fetched getGrupoEtario');
      }),
      catchError(error => this.handleError('getGrupoEtario', error)),
    );
  }

  public getDepartamento(): Observable<IDepartamentos[]> {
    const url = `${this.apiUrl.getDepartamento}`;
    return this.apiHttp.get<IDepartamentos[]>(url, departamentoProjects).pipe(
      tap(row => {
        console.log('Response getDepartamento', row);
        this.log('fetched getDepartamento');
      }),
      catchError(error => this.handleError('getDepartamento', error)),
    );
  }

  public getAliado(): Observable<IAliados[]> {
    const url = `${this.apiUrl.getAliado}`;
    return this.apiHttp.get<IAliados[]>(url, aliadoList).pipe(
      tap(row => {
        console.log('Response getAliado', row);
        this.log('fetched getAliado');
      }),
      catchError(error => this.handleError('getAliado', error)),
    );
  }

  public getRubro(): Observable<IGenericList[]> {
    const url = `${this.apiUrl.getRubro}`;
    return this.apiHttp.get<IGenericList[]>(url, rubroList).pipe(
      tap(row => {
        console.log('Response getRubro', row);
        this.log('fetched getRubro');
      }),
      catchError(error => this.handleError('getRubro', error)),
    );
  }

  public getTipoAporte(): Observable<ITipoAporte[]> {
    const url = `${this.apiUrl.getTipoAporte}`;
    return this.apiHttp.get<ITipoAporte[]>(url, tipoAporte).pipe(
      tap(row => {
        console.log('Response getTipoAporte', row);
        this.log('fetched getTipoAporte');
      }),
      catchError(error => this.handleError('getTipoAporte', error)),
    );
  }

  public getSeguimiento(idProyecto: string, userEmail:string): Observable<ISeguimientoResponse> {
    console.log('Get Seguimiento Data', idProyecto, userEmail)
    const url = `${this.apiUrl.getSeguimientos}?idProyecto=${idProyecto}&emailUsuario=${userEmail}`
    return this.apiHttp
      .get<ISeguimientoResponse>(url, seguimientoProject)
      .pipe(
        tap(row => {
          console.log('Response getSeguimiento', row);
          this.log('fetched getSeguimiento');
        }),
        catchError(error =>
          this.handleError('getSeguimiento', error),
        ),
      );
  }

  public getGeneralInformationProject(idProyecto: string): Observable<IDynamicListPorjects[]> {
    console.log('id proyect', idProyecto)
    
    const url = `${this.apiUrl.getGeneralInformationProjects}?idMuseo=${this.idMuseo}${
      idProyecto ? `&idProyecto=${idProyecto}` : ''
    }`
    return this.apiHttp
      .get<IDynamicListPorjects[]>(url, generalDynamicListForm)
      .pipe(
        tap(row => {
          console.log('Response getGeneralInformationProject', row);
          this.log('fetched getGeneralInformationProject');
        }),
        catchError(error =>
          this.handleError('getGeneralInformationProject', error),
        ),
      );
  }

  public downloadReport(idProject: string): Observable<any> {
    const url = `${this.apiUrl.downloadReport}?idProyecto=${idProject}`;
    return this.apiHttp.get<any>(url).pipe(
      tap(row => {
        console.log('Response downloadReport', row);
        this.log('fetched downloadReport');
      }),
      catchError(error => this.handleError('downloadReport', error)),
    );
  }

  public createProject(body: ICreateProject): Observable<IProjects> {
    const url = `${this.apiUrl.createProjects}/?st=lg`;
    return this.apiHttp
      .post<ICreateProject>(
        url,
        body,
        returnCreateProject,
      )
      .pipe(
        tap(row => {
          console.log('Response createProjects', row);
          this.log('fetched createProjects');
        }),
        catchError((error: any) => this.handleError('createProjects', error)),
      );
  }

  public createProduct(body: IProducto): Observable<IProjects> {
    return this.apiHttp
      .post<IProducto>(this.apiUrl.createProduct, body, returnCreateProject)
      .pipe(
        tap(row => {
          console.log('Response createProduct', row);
          this.log('fetched createProduct');
        }),
        catchError((error: any) => this.handleError('createProduct', error)),
      );
  }

  public saveSeguimiento(body: ISaveSeguimiento): Observable<any> {
    const url = `${this.apiUrl.saveSeguimientos}/?st=lg`;
    return this.apiHttp
      .post<any>(
        url,
        body,
      )
      .pipe(
        tap(row => {
          console.log('Response saveSeguimiento', row);
          this.log('fetched saveSeguimiento');
        }),
        catchError((error: any) => this.handleError('saveSeguimiento', error)),
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
