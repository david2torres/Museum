/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { PLANS_MODAL_MODULES } from './plans.modules';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import {
  IAcciones,
  IConfirmActionModal,
  // ICreateStrategicPlans,
  IEditEjeEstrategico,
  IEmmitrAction,
  IEvaluadoresResponse,
  IGetGuidelinesResponse,
  IIndicadoresResponse,
  IModalEditEje,
} from '@DomainInterfaces/planning.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanningService } from '@services/planningService.service';
import { Subject, takeUntil } from 'rxjs';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  LIMIT,
  MONTHS_CONST,
  PLANNING_SERVICE_CONST,
} from '@DomainConstants/components/planing.constants';
import {
  actionOrigin,
  TPlanningActionForm,
} from '@DomainConstants/types/actions.types';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { IformPlansModalType } from '@DomainConstants/types/plans.types';
@Component({
  selector: 'plans-modal',
  standalone: true,
  imports: [...PLANS_MODAL_MODULES],
  templateUrl: './plans-modal.component.html',
  styleUrl: './plans-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansModalComponent implements OnInit, OnDestroy {
  public title = input.required<string>();
  public isEdit = input<IModalEditEje>();
  public actionButton = output<boolean>();
  
  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);
  public evaluatorsList = signal<IEvaluadoresResponse[]>([]);
  public guideLineList = signal<IGetGuidelinesResponse[]>([]);
  public indicatorsList = signal<IIndicadoresResponse[]>([]);
  public isEditAction = signal<boolean>(false);

  public plansForm: FormGroup;
  public actionsForm: FormGroup;
  public titleHeader: string;
  public confirmModalAction: IConfirmActionModal;
  public yearsList: number[];
  public idMuseo: string;
  public nameMuseo: string;
  public currentYear: number;
  public editActionform: IEditEjeEstrategico;

  public _unSubscribe = new Subject<void>();
  public ICONS_CONST = ICON_IMAGES;
  public monthsList = MONTHS_CONST;
  public isError = false;
  public maxName: number = LIMIT.input;
  public maxDescription: number = LIMIT.textArea;
  public peso: { [accionId: string]: { [indicadorId: string]: number } } = {};
 
  public initActionState: number = 0;
  public confirmModalMessageSucces: string = 'PLANNING.planes.modal.success';

  constructor(
    private fb: FormBuilder,
    private planningService: PlanningService,
    private secureStorage: SecureStorageService,
  ) {
    this.idMuseo = this.secureStorage.getItem(STORAGE_CONST.idMuseum);
    this.currentYear = new Date().getFullYear();
    this.yearsList = Array.from({ length: 8 }, (_, i) => this.currentYear + i);
    this.nameMuseo = this.secureStorage.getItem(STORAGE_CONST.nameMuseum);
    this.loadEvaluatorsList();
    this.loadGuidelineList();
    this.loadIndicators();
  }

  ngOnInit(): void {
    this.isEditAction.update(() => !!this.isEdit()?.elementSelected?.acciones);
    this.initForm();
    this.setConfirmModalMessage();
  }

  private setConfirmModalMessage(): void {
    if (this.isEdit().idEdit && this.isEdit().idPlan) {
      this.confirmModalMessageSucces = 'PLANNING.planes.modal.updateEjeMessage';
    } else if (this.isEdit().idEdit && !this.isEdit().idPlan) {
      this.confirmModalMessageSucces =
        'PLANNING.planes.modal.updatePlanMessage';
    }
  }

  private initForm(): void {
    console.log('IS EDIT', this.isEdit()?.elementSelected?.evaluadores);
    if (this.isEditAction()) {
      this.isError = true;
      this.actionsForm = this.fb.group({
        id: [this.isEdit().elementSelected.id, Validators.required],
        nombre: [this.isEdit().elementSelected.nombre, Validators.required],
        descripcion: [
          this.isEdit().elementSelected.descripcion,
          Validators.required,
        ],
        idPlanestrategico: [this.isEdit().idPlan, Validators.required],
        ejeEstrategicoLineamientoEstrategico: [
          this.isEdit().elementSelected.lineamientosEstrategicos,
          Validators.required,
        ],
        ejeEstrategicoEvaluadores: [
          this.isEdit().elementSelected.evaluadores,
          Validators.required,
        ],
        acciones: this.fb.array(
          this.isEdit().elementSelected.acciones.length !== 0
            ? this.mapActionsForm(this.isEdit().elementSelected.acciones)
            : [],
        ),
        idMuseo: [
          this.secureStorage.getItem(STORAGE_CONST.idMuseum),
          Validators.required,
        ],
      });
      this.initializePesos();
    } else {
      debugger
      this.plansForm = this.fb.group({
        fechaInicioMes: [
          this.isEdit()?.elementSelected?.fechaInicio
            ? String(
                this.isEdit()?.elementSelected?.fechaInicio?.getMonth() + 1,
              )
            : '1',
          Validators.required,
        ],
        fechaInicioAnio: [
          this.isEdit()?.elementSelected?.fechaInicio
            ? String(this.isEdit()?.elementSelected?.fechaInicio.getFullYear())
            : this.currentYear,
          Validators.required,
        ],
        fechaFinMes: [
          this.isEdit()?.elementSelected?.fechaFin
            ? String(this.isEdit()?.elementSelected?.fechaFin.getMonth() + 1)
            : '12',
          Validators.required,
        ],
        fechaFinAnio: [
          this.isEdit()?.elementSelected?.fechaFin
            ? String(this.isEdit()?.elementSelected?.fechaFin.getFullYear())
            : this.currentYear,
          Validators.required,
        ],
        idMuseo: [
          this.secureStorage.getItem(STORAGE_CONST.idMuseum),
          Validators.required,
        ],
        ejesEstrategicos: this.fb.array(
          this.isEdit().idEdit ? [] : [this.createFormGroup()],
        ),
      });
      this.setMessage(this.isEdit().elementSelected?.nombre);
    }
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      ejeEstrategicoLineamientoEstrategico: [[], Validators.required],
      ejeEstrategicoEvaluadores: [[], Validators.required],
    });
  }

  private createActionsFormGroup(): FormGroup {
    const form = this.fb.group({
      id: [String(Math.random())],
      esNueva: [true],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      idEjeEstrategico: [''],
      accionIndicadores: [[], Validators.required],
    });
    this.initializeActionPeso(form.value.id);
    return form;
  }

  initializeActionPeso(accionId: string): void {
    if (!this.peso[accionId]) {
      this.peso[accionId] = {};
    }
  }

  private mapActionsForm(data: IAcciones[]): FormGroup[] {
    const form = data.map(actions =>
      this.fb.group({
        id: actions.id,
        esNueva: false,
        nombre: [actions.nombre, Validators.required],
        descripcion: [actions.descripcion, Validators.required],
        idEjeEstrategico: '',
        accionIndicadores: [actions.indicadores, Validators.required],
      }),
    );
    this.initActionState = form.length;
    return form;
  }

  initializePesos(): void {
    this.listenerForm();

    this.getActionsForm.value.forEach(accion => {
      const accionId = accion.id;

      if (!this.peso[accion.id]) {
        this.peso[accion.id] = {};
      }

      accion.accionIndicadores.forEach(indicador => {
        console.log('Indicator Evaluate', indicador);
        if (this.peso[accion.id][indicador.id] === undefined) {
          this.peso[accion.id][indicador.id] = indicador.peso || 1;
        }
      });
      this.validatePesos(accionId);
    });
  }

  onPesoChange(accionId: string, idIndicador: string, event: Event): void {
    const pesos = Object.values(this.peso[accionId]);
    console.log('Pesos Change', pesos);
    const inputElement = event.target as HTMLInputElement;
    let newPeso = inputElement.value == '' ? null : +inputElement.value;
    if (newPeso === 0) {
      inputElement.value = '1';
      return;
    }
    if (newPeso < 1) {
      newPeso = 1;
      return;
    }
    if (newPeso > 100) {
      newPeso = 100;
      inputElement.value = '100';
    }

    this.peso[accionId][idIndicador] = newPeso;
    this.validatePesos(accionId);
  }

  validatePesos(accionId: string): boolean {
    const pesos = Object.values(this.peso[accionId]);
    const totalPeso = pesos.reduce((acc, peso) => acc + peso, 0);

    // Asegurarse de que ningún peso sea 0
    const hasInvalidPeso = pesos.some(peso => peso === 0);

    const isPesoValid = totalPeso === 100 && !hasInvalidPeso;
    console.log('Peso', isPesoValid, totalPeso);

    if (!isPesoValid) {
      console.error(
        `La suma de los pesos para la acción ${accionId} debe ser igual a 100% y ningún indicador puede tener un peso de 0.`,
      );
      this.isError = false;
    }
    this.isError = isPesoValid;
    return isPesoValid;
  }

  public setMessage(title: string = null): void {
    this.titleHeader = title
      ? title
      : `${APP_CONST.MODAL_PLANS.modalPlans}${this.title()}`;
  }

  private loadIndicators(): void {
    this.planningService
      .getIndicators()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((indicators: IIndicadoresResponse[]) => {
        this.indicatorsList.update(() => indicators);
      });
  }

  private loadEvaluatorsList(): void {
    this.planningService
      .getEvaluators(Number(this.idMuseo))
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((evaluators: IEvaluadoresResponse[]) => {
        this.evaluatorsList.update(() => evaluators);
        console.log('Evaluators List', this.evaluatorsList());
      });
  }

  private loadGuidelineList(): void {
    this.planningService
      .getGuidelines(Number(this.idMuseo))
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((guideLines: IGetGuidelinesResponse[]) => {
        const active = guideLines.filter(guideline => guideline.activo);
        this.guideLineList.update(() => active);
        console.log('Evaluators List', this.guideLineList());
      });
  }

  public addForm(form: TPlanningActionForm) {
    const action =
      form === 'getPlansForm'
        ? this.createFormGroup()
        : this.createActionsFormGroup();

    this[form].push(action);
    form === 'getPlansForm' ? null : this.initializePesos();
  }

  public removeForm(index: number, form: TPlanningActionForm) {
    this[form].removeAt(index);
    if (this.getActionsForm?.value.length === 0) {
      this.isError = true;
    }
  }

  public cancelForm(action: boolean) {
    if (action) {
      this.actionButton.emit(false);
    } else {
      this.isConfirmAction.update(() => false);
    }
  }

  public setMessageConfirmModal(origin: actionOrigin, message?: string): void {
    switch (origin) {
      case 'cancel':
        this.confirmModalAction = {
          origin: origin,
          title: 'SHARED_MESSAGES.confirmCancel',
          messages: 'SHARED_MESSAGES.nessageCancel',
          textLink: 'BUTTONS.stayHere',
          textButton: 'BUTTONS.confirmCancel',
        };
        break;
      case 'delete':
        this.confirmModalAction = {
          origin: origin,
          title: 'PLANNING.planes.modal.confirmDelete',
          messages: 'PLANNING.planes.modal.messageDelete',
          textLink: 'BUTTONS.stayHere',
          textButton: 'BUTTONS.confirmDelete',
        };
        break;
      case 'confirm':
        this.confirmModalAction = {
          origin: origin,
          title: 'PLANNING.planes.modal.confirmUpdate',
          messages: 'PLANNING.planes.modal.messageUpdate',
          textLink: 'BUTTONS.stayHere',
          textButton: 'BUTTONS.confirmSave',
        };
        break;
      case 'error':
        this.confirmModalAction = {
          origin: origin,
          title: this.isEdit().idEdit
            ? 'PLANNING.planes.modal.errorEditarTitle'
            : 'PLANNING.planes.modal.errorCrearTitle',
          messages: message,
          textLink: null,
          textButton: 'BUTTONS.agree',
        };
        break;
    }
    this.isConfirmAction.update(() => true);
  }

  public confirmAction(isConfirm: IEmmitrAction): void {
    switch (isConfirm.origin) {
      case 'cancel':
        this.cancelForm(isConfirm.action);
        break;
      case 'delete':
        this.deleteEjeToForm(isConfirm.action);
        break;
      case 'confirm':
        this.saveActionsForm(isConfirm.action);
        break;
      case 'error':
        this.isConfirmAction.update(() => false);
        break;
      default:
        break;
    }
    console.log('IsCofirm', isConfirm);
  }

  private deleteEjeToForm(action: boolean): void {
    if (action) {
      this.deleteEje();
    } else {
      this.isConfirmAction.update(() => false);
    }
  }

  private deleteEje(): void {
    console.log('Delte Plan Service: ', this.isEdit().idPlan);
    this.planningService
      .deleteEjeStrategic(this.isEdit().elementSelected.id)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((response: any) => {
        console.log('Delete Eje Strategic Plan', response);
        console.log('Response Create Plans', response);
        if (response?.error) {
          this.setMessageConfirmModal('error', response?.error.message);
          return;
        }
        // this.isConfirm.update(() => true);
        setTimeout(() => {
          this.actionButton.emit(true);
        }, 2000);
      });
  }

  public processData(): void {
    console.log('Init Data Transform: ', this.plansForm.value);
    const fechaInicio = this.composeDate(
      this.plansForm.value.fechaInicioMes,
      this.plansForm.value.fechaInicioAnio,
    );
    const fechaFin = this.composeDate(
      this.plansForm.value.fechaFinMes,
      this.plansForm.value.fechaFinAnio,
    );
    const form = {
      ...this.plansForm.value,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      ...(this.isEdit()?.elementSelected?.id
        ? { id: this.isEdit()?.elementSelected?.id }
        : {}),
    };

    delete form.fechaInicioMes;
    delete form.fechaInicioAnio;
    delete form.fechaFinMes;
    delete form.fechaFinAnio;

    this.saveForm(form);
  }

  public processDataAction(): void {
    const data = this.actionsForm.value;
    console.log('Data For Action', data);
    const processedData: IEditEjeEstrategico = {
      ...data,
      acciones: data.acciones.map((accion: any) => ({
        ...accion,
        idEjeEstrategico: data.id,
        accionIndicadores: accion.accionIndicadores.map((indicador: any) => ({
          idAccion: accion.id || null,
          idIndicador: indicador.idIndicador || indicador.id,
          peso:
            this.peso[accion.id]?.[indicador.idIndicador || indicador.id] || 0,
        })),
      })),
      ejeEstrategicoEvaluadores: data.ejeEstrategicoEvaluadores.map(
        (evaluators: any) => ({
          idEvaluador: evaluators.idEvaluador || evaluators.id,
          idEjeEstrategico: data.id,
        }),
      ),
      ejeEstrategicoLineamientoEstrategico:
        data.ejeEstrategicoLineamientoEstrategico.map((guideline: any) => ({
          idLineamientoEstrategico:
            guideline.idLineamientoEstrategico || guideline.id,
          idEjeEstrategico: data.id,
        })),
    };
    this.editActionform = processedData;
    if (
      this.isEdit().idEdit &&
      processedData.acciones.length < this.initActionState
    ) {
      this.setMessageConfirmModal('confirm');
    } else {
      this.saveEditForm(processedData);
    }
  }

  private saveActionsForm(action: boolean): void {
    if (action) {
      this.saveEditForm(this.editActionform);
    }
    this.isConfirmAction.update(() => false);
  }

  private saveEditForm(form: IEditEjeEstrategico): void {
    this.saveForm(form, PLANNING_SERVICE_CONST.edit_eje_strategic);
  }

  private saveForm(form: IformPlansModalType, path: string = null): void {
    const functions = this.setPathService(path);
    console.log(`Save New Form ${functions}`, form);
    this.planningService[functions](form)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(response => {
        console.log(`Response ${functions}`, response);
        if (response?.error) {
          this.setMessageConfirmModal('error', response?.error.message);
          return;
        }
        this.isConfirm.update(() => true);
        setTimeout(() => {
          this.actionButton.emit(true);
        }, 2000);
      });
  }

  private setPathService(path: string = null): string {
    let serviceAction = path
      ? path
      : this.isEdit().idEdit
        ? PLANNING_SERVICE_CONST.edit_plans
        : PLANNING_SERVICE_CONST.create_plans;
    return serviceAction;
  }

  private composeDate(month: string, year: string): string {
    const lastDay = new Date(+year, +month, 0).getDate();
    console.log('lAST DAY MONTHB', lastDay);
    return `${year}-${month?.padStart(2, '0')}-${lastDay.toString().padStart(2, '0')}`;
  }

  public listenerForm(): void {
    // this.isError = false;
    this.getActionsForm.controls.forEach(control => {
      const accionId = control.get('id').value;
      const accionIndicadoresControl = control.get('accionIndicadores');

      if (accionIndicadoresControl) {
        accionIndicadoresControl.valueChanges
          .pipe(takeUntil(this._unSubscribe))
          .subscribe((indicadores: any[]) => {
            this.peso[accionId] = {};
            indicadores.forEach(indicador => {
              this.peso[accionId][indicador.id] = indicador.peso || 1;
            });
            this.validatePesos(accionId);
          });
      }
    });
  }

  public get getPlansForm(): FormArray {
    return this.plansForm.get('ejesEstrategicos') as FormArray;
  }

  public get getActionsForm(): FormArray {
    return this.actionsForm?.get('acciones') as FormArray;
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
