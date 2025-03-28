import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { INDICATORS_MODAL_MODULES } from './indicators.modules';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import {
  ICategories,
  IConfirmActionModal,
  IEmmitrAction,
  IModalEdit,
  Indicadores,
  IproyectosAsociados,
  ITipoIndicador,
  IUnidadesMedida,
} from '@DomainInterfaces/planning.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  // CLASIFICACION_CONST,
  // UNIDAD_MEDIDA_CONST,
  PLANNING_SERVICE_CONST,
} from '@DomainConstants/components/planing.constants';
import { Subject, takeUntil } from 'rxjs';
import { PlanningService } from '@services/planningService.service';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import { APP_CONST } from '@DomainConstants/shared/app.constants';

@Component({
  selector: 'indicators-modal',
  standalone: true,
  imports: [...INDICATORS_MODAL_MODULES],
  templateUrl: './indicators-modal.component.html',
  styleUrl: './indicators-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorsModalComponent implements OnInit, OnDestroy {
  public ICONS_CONST = ICON_IMAGES;
  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);
  public title = input.required<string>();
  public isEdit = input<IModalEdit>();
  public actionButton = output<boolean>();
  public indicatorsForm: FormGroup;
  public titleHeader: string;
  public confirmModalMessageSucces: string =
    'PLANNING.indicadores.modal.success';
  public confirmModalAction: IConfirmActionModal;
  public _unSubscribe = new Subject<void>();
  public unidadesList = signal<IUnidadesMedida[]>([]);
  public clasificacionList = signal<ITipoIndicador[]>([]);
  public categoriesList = signal<ICategories[]>([]);
  public maxName: number = 150;
  public hasWeightError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private planningService: PlanningService,
  ) {
    this.loadUnidades();
    this.loadClasificacion();
    this.loadCategories();
    // this.loadPolicians();// EN caso de cargar listas de backend
  }

  ngOnInit(): void {
    console.log('inIT', this.isEdit());

    this.initForm(this.isEdit().idEdit);
    this.setMessage(this.isEdit().elementSelected?.nombre);
    if (this.isEdit().idEdit) {
      this.confirmModalMessageSucces =
        'PLANNING.indicadores.modal.updateGuidelineMessage';
    }
  }

  private initForm(isEdit: boolean): void {
    this.indicatorsForm = this.fb.group({
      forms: this.fb.array([
        this.createFormGroup(isEdit ? this.isEdit().elementSelected : null),
      ]),
    });

    if (this.isEdit().elementSelected?.proyectosAsociados?.length > 0) {
      this.projectsForm.valueChanges.subscribe(() => {
        this.validateWeights();
      });
    }
  }

  private createFormGroup(data?: Indicadores): FormGroup {
    console.log('Informacion Modal Indicadores', data);
    return this.fb.group({
      id: [''],
      idTipoIndicador: [data?.idTipoIndicador ?? null, Validators.required],
      meta: [data?.meta ?? '', Validators.required],
      nombre: [data?.nombre ?? '', Validators.required],
      formula: [data?.formula ?? '', Validators.required],
      idUnidadDeMedida: [data?.idUnidadDeMedida ?? null, Validators.required],
      tendencia: [data?.tendencia ?? null, Validators.required],
      criterio: [data?.criterio ?? null, Validators.required],
      idCategoriaIndicador: [
        data?.idCategoriaIndicador ?? null,
        Validators.required,
      ],
      ...(this.isEdit().idEdit &&
        data?.proyectosAsociados?.length > 0 && {
          proyectosAsociados: this.fb.array(
            this.initProjects(data?.proyectosAsociados),
          ),
        }),
    });
  }

  private initProjects(projects: IproyectosAsociados[]): FormGroup[] {
    if (projects && projects.length >= 1) {
      return projects.map(project => this.createProjectGroup(project));
    }
  }

  private createProjectGroup(data?: IproyectosAsociados): FormGroup {
    console.log('Prpject Grpu', data);
    return this.fb.group({
      idProyecto: [data?.idProyecto],
      idIndicador: [data?.idIndicador],
      numero: [data?.numero],
      nombre: [data?.nombre],
      peso: [data?.peso],
    });
  }

  public validateWeights(): void {
    const projectsArray = this.projectsForm.controls;
    const totalProjects = projectsArray.length;

    let totalWeight = 0;
    let hasError = false;

    projectsArray.forEach((control: any) => {
      let init = control.get('peso')?.value || 0;
      let weight = Number(init);
      totalWeight += weight;
    });

    if (totalProjects === 1) {
      hasError = totalWeight !== 100;
    } else {
      hasError = totalWeight !== 100;
    }
    this.hasWeightError = hasError;
  }

  public onWeightBlur(control: any): void {
    let weight = control.get('peso')?.value || 0;
    if (weight <= 0 || weight > 100) {
      weight = 1;
      control.get('peso')?.setValue(weight, { emitEvent: false });
    }
    this.validateWeights();
  }

  public addForm() {
    this.getIndicatorsForm.push(this.createFormGroup());
  }

  public removeForm(index: number) {
    this.getIndicatorsForm.removeAt(index);
  }

  public cancelForm(action: boolean) {
    if (action) {
      this.actionButton.emit(false);
    } else {
      this.isConfirmAction.update(() => false);
    }
  }

  public deleteForm(action: boolean): void {
    if (action) {
      this.deleteIndicator(this.isEdit().elementSelected.id);
    } else {
      this.isConfirmAction.update(() => false);
    }
    console.log('idGuideline', this.isEdit().elementSelected.id);
  }

  public setMessageConfirmModal(origin: actionOrigin): void {
    if (origin == 'cancel') {
      this.confirmModalAction = {
        origin: origin,
        title: 'SHARED_MESSAGES.confirmCancel',
        messages: 'SHARED_MESSAGES.nessageCancel',
        textLink: 'BUTTONS.stayHere',
        textButton: 'BUTTONS.confirmCancel',
      };
    } else {
      this.confirmModalAction = {
        origin: origin,
        title: 'PLANNING.indicadores.modal.confirmDelete',
        messages: 'PLANNING.indicadores.modal.messageDelete',
        textLink: 'BUTTONS.stayHere',
        textButton: 'BUTTONS.confirmDelete',
      };
    }
    this.isConfirmAction.update(() => true);
  }

  public confirmAction(isConfirm: IEmmitrAction): void {
    if (isConfirm.origin === 'cancel') {
      this.cancelForm(isConfirm.action);
    } else {
      this.deleteForm(isConfirm.action);
    }
    console.log('IsCofirm', isConfirm);
  }

  private deleteIndicator(indicator: string): void {
    this.planningService
      .deleteTypeIndicators(indicator)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(resp => {
        console.log('Delete Indicator', resp);
        setTimeout(() => {
          this.actionButton.emit(true);
        }, 200);
      });
  }

  public setMessage(title: string = null): void {
    console.log('Title ', title);
    this.titleHeader = title
      ? title
      : `${APP_CONST.MODAL_INDICATORS.modalIndicator}${this.title()}`;
  }

  public saveForm(): void {
    let form = this.indicatorsForm.value.forms;

    if (this.isEdit().idEdit) {
      form[0].id = this.isEdit().elementSelected.id;
      form = form[0];
    }

    const serviceFunction = this.isEdit().idEdit
      ? PLANNING_SERVICE_CONST.edit_indicator
      : PLANNING_SERVICE_CONST.create_indicator;

    this.planningService[serviceFunction](form)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(response => {
        console.log('Response Create', response);
        this.isConfirm.update(() => true);
        setTimeout(() => {
          this.actionButton.emit(true);
        }, 2000);
      });
    console.log('Value Form', form);
  }

  public onSelectedOption(optionId: string, index?: number): void {
    // let selectedOption = this.unidadesList.find(
    //   option => option.id === optionId,
    // );
    // this.getGuidelinesForm.at(index).patchValue({  this.selectedOption  });
    console.log('Index', index, optionId);
  }

  private loadUnidades(): void {
    this.planningService
      .getUnidadesMedida()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((unidades: IUnidadesMedida[]) => {
        this.unidadesList.update(() => unidades);
      });
  }

  private loadClasificacion(): void {
    this.planningService
      .getListaTiposIndicador()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((clasificacion: ITipoIndicador[]) => {
        this.clasificacionList.update(() => clasificacion);
      });
  }

  private loadCategories(): void {
    this.planningService
      .getCategoriesIndicador()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((categories: ICategories[]) => {
        this.categoriesList.update(() => categories);
      });
  }

  public get getIndicatorsForm(): FormArray {
    return this.indicatorsForm.get('forms') as FormArray;
  }

  get projectsForm(): FormArray {
    const firstFormGroup = (this.indicatorsForm?.get('forms') as FormArray)?.at(
      0,
    ) as FormGroup;
    return firstFormGroup?.get('proyectosAsociados') as FormArray;
  }

  // public onUnidadChange(selectedValue: string): void {
  //   this.unidadesList. = selectedValue;
  // }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
