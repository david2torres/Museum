import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import {
  IAliado,
  IAliados,
  IAreasPorMuseo,
  ICiudadMunicipio,
  IComunidad,
  IComunidades,
  IDepartamentos,
  IDynamicAction,
  IDynamicGuideline,
  IDynamicIndicator,
  IDynamicListPorjects,
  IGrupoEtario,
  IModalNewProject,
  IPresupuesto,
  IProjects,
  ITipoAporte,
  ITipologias,
} from '@DomainInterfaces/projectManagement.interface';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { PROJECT_MODAL_MODULES } from './createProjects.modules';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import {
  INIT_EDIT,
  LIMIT,
} from '@DomainConstants/components/planing.constants';
import { ProjectServiceService } from '@services/project-service.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TProjectsForm } from '@DomainConstants/types/managementProjects.types';
import {
  IConfirmActionModal,
  IEmmitrAction,
  IModalEdit,
} from '@DomainInterfaces/planning.interface';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import { INIT_STATE, ORIGIN_TABLE } from '@DomainConstants/components/management-projects.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';

@Component({
  selector: 'create-project-modal',
  standalone: true,
  imports: [...PROJECT_MODAL_MODULES],
  templateUrl: './create-project-modal.component.html',
  styleUrl: './create-project-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectModalComponent implements OnInit, OnDestroy {
  public title = input.required<string>();
  public isEdit = input<IModalNewProject>();
  public actionButton = output<boolean>();
  
  public createProjectForm: FormGroup;
  public informativeMessage: string;
  public ICONS_CONST = ICON_IMAGES;
  public _readOnly: boolean = false;

  public confirmModalMessageSucces: string = 'PLANNING.planes.modal.success';
  private onlyReadMessage: string = 'GENERAL_MESSAGES.onlyRead'
  private requiredFields: string = 'PLANNING.lineamientos.modal.info'


  private generalDynamicListForm = signal<IDynamicListPorjects[]>([]);
  public ejeList = signal<IDynamicListPorjects[]>([]);
  public guideLineList = signal<IDynamicGuideline[]>([]);
  public actionsList = signal<IDynamicAction[]>([]);
  public indicatorsList = signal<IDynamicIndicator[]>([]);
  public statesList = signal<any[]>([]);

  public areasApoyoList = signal<IAreasPorMuseo[]>([]);
  public tipologiaList = signal<ITipologias[]>([]);
  public comunidadList = signal<IComunidades[]>([]);
  public grupoList = signal<IGrupoEtario[]>([]);
  public departamentoList = signal<IDepartamentos[]>([]);
  public aliadosList = signal<IAliados[]>([]);
  public tipoAporteList = signal<ITipoAporte[]>([]);
  public municipioList: { [index: number]: ICiudadMunicipio[] } = {};

  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);
  public isAllData = signal<boolean>(false);
  public isViewPlans = signal<boolean>(false);
  public isCreateProduct = signal<boolean>(false);
  public productList = signal<IProjects[]>([]);
  public confirmModalAction: IConfirmActionModal;

  public idProject: string;
  public titleHeader: string;
  public user: string;
  public area: string;
  public numberProject: string;
  public maxDate: string;

  public maxName: number = LIMIT.input;
  public maxDescription: number = LIMIT.textArea;
  public modalTitle: string = APP_CONST.MODAL_GUIDELINES.initTitle;
  public isEditProduct: IModalEdit = { ...INIT_EDIT };
  public _unSubscribe = new Subject<void>();

  private initState = INIT_STATE;

  public optionsView = {
    isPaginator: false,
    isCreate: false,
    isHeaders: [
      'ID de Proyecto',
      'Nombre del proyecto',
      'Área responsable',
      'Estado',
    ],
    isEdit: false,
    isSeguimiento: false,
    isEvaluate: false,
    isSearch: false,
    origin: ORIGIN_TABLE.projects,
  };

  constructor(
    private fb: FormBuilder,
    private secureStorage: SecureStorageService,
    private projectsService: ProjectServiceService,
  ) {
    this.municipioList[0] = [];
    const currentYear = new Date().getFullYear();
    this.maxDate = `${currentYear}-12-31`;
  }

  ngOnInit(): void {
    console.log('INIT CREATE EDIT PROJECT', this.isEdit());
    this.combineInitListData();
    this._readOnly = this.isEdit().elementSelected?.readOnly ?? false;
    this.informativeMessage = this._readOnly ? this.onlyReadMessage : this.requiredFields
  }

  private combineInitListData(): void {
    combineLatest([
      this.projectsService.getGeneralInformationProject(this.isEdit()?.elementSelected?.id),
      this.projectsService.getAreas(),
      this.projectsService.getTipologias(),
      this.projectsService.getComunidades(),
      this.projectsService.getGrupoEtario(),
      this.projectsService.getDepartamento(),
      this.projectsService.getAliado(),
      this.projectsService.getTipoAporte(),
      this.projectsService.getStatesProjects()
    ])
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(
        ([
          generalInformation,
          areas,
          tipologias,
          comunidades,
          grupoEtario,
          departamento,
          aliados,
          tipoAporte,
          satateProject
        ]) => {
          this.loadGeneralInformation(generalInformation);
          this.loadAreas(areas);
          this.loadTipologias(tipologias);
          this.loadComunidad(comunidades);
          this.loadGrupoEtario(grupoEtario);
          this.loadDepartamento(departamento);
          this.loadAliado(aliados);
          this.loadTipoAporte(tipoAporte);
          this.initForm(this.isEdit().elementSelected);
          this.statesList.update(() => satateProject);
          this.isAllData.update(() => true);
          this.setLocalInformation(this.isEdit().elementSelected);
        },
      );
  }

  private initForm(data: IProjects): void {
    console.log('Data INIT', data);
    this.createProjectForm = this.fb.group({
      id: [data?.id || ''],
      numero: [data?.numero || ''], // Numero de Proyecto
      estado: [{value: data?.estado || this.initState , disabled: !data?.habilitarEstado}],
      evaluado: [{value: data?.evaluado ?? false, disabled: !data?.habilitarEvaluado }],
      nombre: [{ value: data?.nombre || '', disabled: this._readOnly }, Validators.required],
      idMuseo: [this.secureStorage.getItem(STORAGE_CONST.idMuseum)],
      idEjeEstrategico: [{ value: data?.idEjeEstrategico || '', disabled: this._readOnly }, Validators.required],
      idAccion: [{ value: data?.idAccion || '', disabled: this._readOnly }, Validators.required],
      fechaInicio: [
        {
          value: data?.fechaInicio
            ? new Date(data.fechaInicio).toISOString().split('T')[0]
            : '', disabled: this._readOnly
        },
        Validators.required,
      ],
      fechaFin: [
        {
          value: data?.fechaFin
            ? new Date(data.fechaFin).toISOString().split('T')[0]
            : '', disabled: this._readOnly
        },
        [Validators.required, this.maxDateValidator(new Date())],
      ],
      justificacion: [{ value: data?.justificacion || '', disabled: this._readOnly }],
      descripcion: [{ value: data?.descripcion || '', disabled: this._readOnly }],
      objetivoGeneral: [{ value: data?.objetivoGeneral || '', disabled: this._readOnly }],
      idTipologiaSostenibilidad: [{ value: data?.idTipologiaSostenibilidad || '', disabled: this._readOnly }],
      emailUsuario: [this.secureStorage.getItem(STORAGE_CONST.userEmail)],
      lineamientosEstrategicos: [{ value: data?.lineamientosEstrategicos || [], disabled: this._readOnly }],
      indicadores: [{ value: data?.indicadores || [], disabled: this._readOnly }],
      objetivosEspecificos: this.fb.array(
        data?.objetivosEspecificos
          ? data.objetivosEspecificos.map(obj => this.fb.control({ value: obj, disabled: this._readOnly }))
          : [
            this.fb.control({ value: '', disabled: this._readOnly }),
            this.fb.control({ value: '', disabled: this._readOnly }),
            this.fb.control({ value: '', disabled: this._readOnly }),
          ]
      ),
      areasApoyo: [{ value: data?.areasApoyo || [], disabled: this._readOnly }],
      comunidades: this.fb.array(
        data?.comunidades
          ? data.comunidades.map((comunidad, index) =>
            this.createComunidadGroup(comunidad, index),
          )
          : [],
      ),
      aliados: this.fb.array(
        data?.aliados
          ? data.aliados.map(aliado => this.createAliadoGroup(aliado))
          : [],
      ),
      productos: [{ value: data?.productos || [], disabled: this._readOnly }],
      presupuesto: [{ value: data?.presupuesto || {}, disabled: this._readOnly }],
    });
    this.setMessage(data?.nombre, data?.numero);
    this.setGeneralList(data?.idEjeEstrategico);
    this.setActionList(data?.idAccion);
    this.listenersForm();
  }

  private createComunidadGroup(
    comunidad?: IComunidad,
    index?: number,
  ): FormGroup {
    this.setMunicipioList(String(comunidad?.idDepartamento), index);
    return this.fb.group({
      idComunidad: [{ value: comunidad?.idComunidad || '', disabled: this._readOnly }],
      gruposEtarios: [{ value: comunidad?.gruposEtarios || [], disabled: this._readOnly }],
      idDepartamento: [{ value: comunidad?.idDepartamento || '', disabled: this._readOnly }],
      municipios: [{ value: comunidad?.municipios || [], disabled: this._readOnly }],
    });
  }

  private createAliadoGroup(aliado?: IAliado): FormGroup {
    let aliadoList = this.setAliadosReadValues(aliado?.idAliado);
    return this.fb.group({
      idAliado: [{ value: aliado?.idAliado || '', disabled: this._readOnly }],
      idTipoAporte: [{ value: aliado?.idTipoAporte || '', disabled: this._readOnly }],
      caracterizacion: [{ value: aliadoList?.caracterizacion || '', disabled: this._readOnly }],
      localizacion: [{ value: aliadoList?.localizacion || '', disabled: this._readOnly }],
    });
  }

  public setMessage(title: string = null, proyect: string = null): void {
    this.titleHeader = title
      ? title
      : `${APP_CONST.MODAL_NEW_PROJECT.modalProject}${this.title()}`;

    const date = new Date();
    this.numberProject = `${proyect ? proyect : `P000-${date.getFullYear()}`}`;
  }

  private listenersForm(): void {
    this.listenerEjeEstrategico();
    this.listenerAction();
    this.listenerDepartamento();
    this.listenerAliados();
  }

  private listenerEjeEstrategico(): void {
    this.createProjectForm
      .get('idEjeEstrategico')
      ?.valueChanges.subscribe(selectedEjeId => {
        if (selectedEjeId) {
          this.setGeneralList(selectedEjeId);
          this.createProjectForm.get('lineamientosEstrategicos')?.setValue([]);
        }
      });
  }

  private setGeneralList(idEjeEstrategico: string): void {
    let eje = this.generalDynamicListForm().find(
      eje => eje.id === idEjeEstrategico,
    );
    this.guideLineList.set(eje?.lineamientosEstrategicos || []);
    this.actionsList.set(eje?.acciones || []);
  }

  private listenerAction(): void {
    this.createProjectForm
      .get('idAccion')
      ?.valueChanges.subscribe(selectedAccionId => {
        console.log('Eje selectedAccionId', selectedAccionId);
        if (selectedAccionId) {
          this.setActionList(selectedAccionId);
          this.createProjectForm.get('indicadores')?.setValue([]);
        }
      });
  }

  private setActionList(idAction: string): void {
    let accion = this.actionsList().find(accion => accion.id === idAction);
    this.indicatorsList.set(accion?.indicadores || []);
  }

  private listenerDepartamento(): void {
    let comunidadesArray = this.comunidades;
    comunidadesArray.controls.forEach((comunidadGroup: any, index) => {
      const departamentoControl = comunidadGroup.get('idDepartamento');
      departamentoControl?.valueChanges.subscribe(selectedDepartamento => {
        if (selectedDepartamento) {
          this.setMunicipioList(selectedDepartamento, index);
        }
        comunidadGroup.get('municipios')?.setValue([]);
      });
    });
  }

  private setMunicipioList(idDepartamento: string, index: number): void {
    let municipio = this.departamentoList().find(
      departamento => departamento.id === Number(idDepartamento),
    );
    this.municipioList[index] = municipio?.ciudades || [];
    return;
  }

  private listenerAliados(): void {
    let aliadosArray = this.aliados;
    aliadosArray.controls.forEach((aliadoGroup: any) => {
      const departamentoControl = aliadoGroup.get('idAliado');
      departamentoControl?.valueChanges.subscribe(aliadoSelected => {
        console.log('Aliados Search ', aliadoSelected);
        let aliado = this.setAliadosReadValues(aliadoSelected);
        aliadoGroup.get('caracterizacion')?.setValue(aliado.caracterizacion);
        aliadoGroup.get('localizacion')?.setValue(aliado.localizacion);
      });
    });
  }

  private setAliadosReadValues(idAliado: string) {
    return this.aliadosList().find(aliados => aliados.id === idAliado);
  }

  private loadGeneralInformation(dynamicList: IDynamicListPorjects[]): void {
    this.generalDynamicListForm.set(dynamicList);
    this.ejeList.set(dynamicList);
  }

  private loadAreas(areas: IAreasPorMuseo[]): void {
    this.areasApoyoList.update(() => areas);
  }

  private loadTipologias(tipologia: ITipologias[]): void {
    this.tipologiaList.update(() => tipologia);
  }

  private loadComunidad(comunidades: IComunidades[]): void {
    this.comunidadList.update(() => comunidades);
  }

  private loadGrupoEtario(grupoEtario: IGrupoEtario[]): void {
    this.grupoList.update(() => grupoEtario);
  }

  private loadDepartamento(departamento: IDepartamentos[]): void {
    this.departamentoList.update(() => departamento);
  }

  private loadAliado(aliado: IAliados[]): void {
    this.aliadosList.update(() => aliado);
  }

  private loadTipoAporte(TipoAporte: ITipoAporte[]): void {
    this.tipoAporteList.update(() => TipoAporte);
  }

  private setLocalInformation(data: IProjects): void {
    this.user = data?.nombreCreador ?? this.secureStorage.getItem(STORAGE_CONST.userName);
    this.area = data?.areaResponsable.nombre ?? this.secureStorage.getItem(STORAGE_CONST.userArea);
  }

  public addComunidad(): void {
    if (this._readOnly) return;
    const index = this.comunidades.length;
    this.comunidades.push(
      this.fb.group({
        idComunidad: ['', Validators.required],
        gruposEtarios: [[]],
        idDepartamento: ['', Validators.required],
        municipios: [[]],
      }),
    );
    this.municipioList[index] = [];
    this.listenersForm();
  }

  public addAliado(): void {
    if (this._readOnly) return;
    this.aliados.push(
      this.fb.group({
        idAliado: ['', Validators.required],
        idTipoAporte: ['', Validators.required],
        caracterizacion: [''],
        localizacion: [''],
      }),
    );
    this.listenersForm();
  }

  public removeForm(index: number, form: TProjectsForm) {
    console.log('Form', this[form], this[form][index]);
    this[form].removeAt(index);
    console.log('Form 2', this[form]);
  }

  public setMessageConfirmModal(origin: actionOrigin, message?: string): void {
    console.log('setMessageConfirmModal creat3e project', origin);
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
          title: 'NEW_PROJECT.modal.saveConfirm',
          messages: 'NEW_PROJECT.modal.messageConfirm',
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
    console.log('Action Confirm Modal', isConfirm);
    switch (isConfirm.origin) {
      case 'cancel':
        this.cancelForm(isConfirm.action);
        break;
      case 'error':
        this.isConfirmAction.update(() => false);
        break;
      default:
        break;
    }
    console.log('IsCofirm', isConfirm);
  }

  private cancelForm(action: boolean) {
    if (action) {
      this.actionButton.emit(false);
    } else {
      this.isConfirmAction.update(() => false);
    }
  }

  public sendProject() {
    if (this._readOnly) {
      this.isViewPlans.update(() => true);
      return;
    }
    if (this.createProjectForm.valid) {
      console.log('View Plans', this.isViewPlans());
      let body = this.createProjectForm.value;
      debugger
      console.log('Form Project', this.createProjectForm.value);
      this.projectsService.createProject(body).subscribe((resp: IProjects) => {
        console.log('New Response', resp);
        if (resp.nombre) {
          console.log('update Plans');
          this.idProject = resp.id;
          this.isViewPlans.update(() => true);
          this.initForm(resp);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  public actionsFinishProcces(id: number): void {

    if (this._readOnly && id != 1) {
      this.actionButton.emit(false);
      return;
    }

    if (id == 1) {
      this.isViewPlans.update(() => false);
      return;
    }

    this.emitAndCloseModal();
  }

  private emitAndCloseModal(): void {
    this.setMessageConfirmModal('confirm');
    this.isConfirmAction.update(() => true);
    setTimeout(() => {
      this.actionButton.emit(false);
    }, 1200);
  }

  public downloadFile(): void {
    let idProject = this.createProjectForm.get('id').value;
    this.projectsService
      .downloadReport(idProject)
      .subscribe((response: any) => {
        const base64Data = response.data;
        const binaryData = atob(base64Data);
        const byteNumbers = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteNumbers[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteNumbers], { type: 'application/xlsx' });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `Reporte de Productos - Proyecto ${this.numberProject}.xlsx`;
        a.click();
        URL.revokeObjectURL(blobUrl);
      });
  }

  private maxDateValidator(date: Date) {
    const maxDate = new Date(date.getFullYear(), 11, 31);
    return (control: AbstractControl) => {
      const selectedDate = new Date(control.value);
      return selectedDate > maxDate
        ? { maxDate: { value: maxDate.toISOString().split('T')[0] } }
        : null;
    };
  }

  public openCloseModal(isEdit: boolean = false, products?: any): void {
    if (this._readOnly) return;
    this.isEditProduct = { ...INIT_EDIT };
    if (isEdit) {
      const edit: IModalEdit = {
        idEdit: isEdit,
        elementSelected: products,
      };
      this.isEditProduct = edit;
    }
    setTimeout(() => {
      this.isCreateProduct.update(value => !value);
    }, 100);
  }

  public closeModalEvent(isUpdate: any): void {
    if (isUpdate.action) {
      this.initForm(isUpdate.object);
    }
    this.isCreateProduct.update(value => !value);
  }

  public formatCurrency(value: number | null | undefined): string {
    const amount = value ?? 0;
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/\s*COP$/, '');
  }

  public changeActive(): void {
    console.log('Chamge toolge')
    const currentValue = this.createProjectForm.get('evaluado')?.value;
    this.createProjectForm.patchValue({
      evaluado: !currentValue,
    });
  }

  get comunidades(): FormArray {
    return this.createProjectForm.get('comunidades') as FormArray;
  }

  get aliados(): FormArray {
    return this.createProjectForm.get('aliados') as FormArray;
  }

  get objetivosEspecificos() {
    return this.createProjectForm.get('objetivosEspecificos') as FormArray;
  }

  get presupuestoForm(): IPresupuesto {
    return this.createProjectForm.get('presupuesto').value;
  }

//  TODO Funcion Select pasra comprar Objetos por id y no por referencia
  public compareState(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
