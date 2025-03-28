/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ICategories,
  ICeateGuidelinesResponse,
  ICreateStrategicPlans,
  IEditEjeEstrategico,
  IEditGuidelineResponse,
  IGetGuidelinesResponse,
  IIndicadoresResponse,
  IPoliticasResponse,
  IStrategicPlansResponse,
  ITipoIndicador,
  ITypeIndicatorsRequest,
  IUnidadesMedida,
} from '@DomainInterfaces/planning.interface';
import { Observable } from 'rxjs';

export abstract class AbstractPlanningUseCases {
  abstract getGuidelines(idMuseo: number): Observable<IGetGuidelinesResponse[]>;
  abstract getStrategicPlans(
    idMuseo: number,
  ): Observable<IStrategicPlansResponse[]>;
  //TODO tipar respuestas ANY
  abstract createGuideLine(body: ICeateGuidelinesResponse[]): Observable<any>;

  abstract editGuideline(body: IEditGuidelineResponse): Observable<any>;

  abstract deleteGuidelines(idLineamiento: string): Observable<any>;

  abstract getPolicies(): Observable<IPoliticasResponse[]>;

  abstract getEvaluators(idMuseo: number): Observable<any>;

  abstract createStrategicPlans(body: ICreateStrategicPlans): Observable<any>;

  abstract editStrategicPlans(body: ICreateStrategicPlans): Observable<any>;

  abstract editEjeStrategic(body: IEditEjeEstrategico): Observable<any>;

  abstract deleteEjeStrategic(idEje: string): Observable<any>;

  abstract getIndicators(): Observable<IIndicadoresResponse[]>;

  abstract getTypeIndicators(): Observable<ITypeIndicatorsRequest[]>;

  abstract createTypeIndicators(body: ITypeIndicatorsRequest): Observable<any>;

  abstract editTypeIndicators(body: ITypeIndicatorsRequest): Observable<any>;

  abstract deleteTypeIndicators(idIndicator: string): Observable<any>;

  abstract getUnidadesMedida(): Observable<IUnidadesMedida[]>;

  abstract getListaTiposIndicador(): Observable<ITipoIndicador[]>;

  abstract getCategoriesIndicador(): Observable<ICategories[]>;
}
