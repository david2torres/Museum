import {
  IAliados,
  IAreasPorMuseo,
  IComunidades,
  ICreateProject,
  IDepartamentos,
  IDynamicListPorjects,
  IGenericList,
  IGrupoEtario,
  IProducto,
  IProjects,
  IProjectsComponent,
  ISaveSeguimiento,
  ISeguimientoResponse,
  ITipologias,
} from '@DomainInterfaces/projectManagement.interface';
import { Observable } from 'rxjs';

export abstract class AbstractProjectsMangement {
  abstract getProjects(): Observable<IProjectsComponent[]>;
  abstract getCollaborationProjects(): Observable<IProjectsComponent[]>;
  abstract getEvaluationProjects(): Observable<IProjectsComponent[]>;
  abstract getGeneralInformationProject(idProyecto: string): Observable<IDynamicListPorjects[]>;
  abstract getStatesProjects(): Observable<any[]>; // Filter Service

  abstract getAreas(): Observable<IAreasPorMuseo[]>;
  abstract getTipologias(): Observable<ITipologias[]>;
  abstract getComunidades(): Observable<IComunidades[]>;
  abstract getGrupoEtario(): Observable<IGrupoEtario[]>;

  abstract getDepartamento(): Observable<IDepartamentos[]>;
  abstract getAliado(): Observable<IAliados[]>;
  abstract getRubro(): Observable<IGenericList[]>;
  abstract getTipoAporte(): Observable<any[]>;

  abstract getSeguimiento(idProyecto: string, userEmail): Observable<ISeguimientoResponse>;
  abstract saveSeguimiento(body: ISaveSeguimiento): Observable<any>;

  abstract createProject(body: ICreateProject): Observable<IProjects>;
  abstract createProduct(body: IProducto): Observable<IProjects>;

  abstract downloadReport(idProject: string): Observable<any>;
}
