/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * NIVEL DE SERVICIO
 *  Recibe datos realizados por medio de la peticion https de UserAuthRepository
 *  maneja toda la manipulacion y Almacenamiento de datos
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanningRepository } from '../repositories/planning-repository.service';
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

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  constructor(private planningRepository: PlanningRepository) {}

  public getGuidelines(idMuseo: number): Observable<IGetGuidelinesResponse[]> {
    return this.planningRepository.getGuidelines(idMuseo);
  }

  public getStrategicPlans(
    idMuseo: number,
  ): Observable<IStrategicPlansResponse[]> {
    return this.planningRepository.getStrategicPlans(idMuseo);
  }

  public createGuideLine(
    bodyGuideline: ICeateGuidelinesResponse[],
  ): Observable<void> {
    return this.planningRepository.createGuideLine(bodyGuideline);
  }

  public editGuideline(
    bodyGuideline: IEditGuidelineResponse,
  ): Observable<void> {
    return this.planningRepository.editGuideline(bodyGuideline);
  }

  public deleteGuidelines(idLineamiento: string): Observable<void> {
    return this.planningRepository.deleteGuidelines(idLineamiento);
  }

  public getEvaluators(idMuseo: number): Observable<IEvaluadoresResponse[]> {
    return this.planningRepository.getEvaluators(idMuseo);
  }

  public getPolicies(): Observable<IPoliticasResponse[]> {
    return this.planningRepository.getPolicies();
  }

  public editEjeStrategic(
    bodyEjeStrategic: IEditEjeEstrategico,
  ): Observable<void> {
    return this.planningRepository.editEjeStrategic(bodyEjeStrategic);
  }

  public getIndicators(): Observable<IIndicadoresResponse[]> {
    return this.planningRepository.getIndicators();
  }

  public createStrategicPlans(
    bodyStrategicPlan: ICreateStrategicPlans,
  ): Observable<any> {
    return this.planningRepository.createStrategicPlans(bodyStrategicPlan);
  }

  public editStrategicPlans(
    bodyStrategicPlan: ICreateStrategicPlans,
  ): Observable<any> {
    return this.planningRepository.editStrategicPlans(bodyStrategicPlan);
  }

  // Type Indicators
  public getTypeIndicators(): Observable<ITypeIndicatorsRequest[]> {
    return this.planningRepository.getTypeIndicators();
  }

  public createTypeIndicators(
    bodyTypeIndicator: ITypeIndicatorsRequest,
  ): Observable<any> {
    return this.planningRepository.createTypeIndicators(bodyTypeIndicator);
  }

  public editTypeIndicators(
    bodyTypeIndicator: ITypeIndicatorsRequest,
  ): Observable<any> {
    return this.planningRepository.editTypeIndicators(bodyTypeIndicator);
  }

  public deleteTypeIndicators(idiTypeIndicator: string): Observable<void> {
    return this.planningRepository.deleteTypeIndicators(idiTypeIndicator);
  }

  public deleteEjeStrategic(IdEje: string): Observable<void> {
    return this.planningRepository.deleteEjeStrategic(IdEje);
  }

  public getUnidadesMedida(): Observable<IUnidadesMedida[]> {
    return this.planningRepository.getUnidadesMedida();
  }

  public getListaTiposIndicador(): Observable<ITipoIndicador[]> {
    return this.planningRepository.getListaTiposIndicador();
  }

  public getCategoriesIndicador(): Observable<ICategories[]> {
    return this.planningRepository.getCategoriesIndicador();
  }
  // public setLocalData(userName: string, rol: Entidade[]): void {
  //   sessionStorage.setItem(STORAGE_CONST.userName, userName);
  //   sessionStorage.setItem(STORAGE_CONST.userRol, rol[0].roles[0].nombre);
  // }
}
