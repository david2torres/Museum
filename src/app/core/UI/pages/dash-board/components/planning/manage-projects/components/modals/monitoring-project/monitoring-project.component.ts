import { ChangeDetectionStrategy, Component, input, OnDestroy, OnInit, output, signal, } from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import {
  IConfirmActionModal,
  IEmmitrAction,
} from '@DomainInterfaces/planning.interface';
import {
  IMes,
  ISeguimiento,
  ISeguimientoResponse,
} from '@DomainInterfaces/projectManagement.interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { ProjectServiceService } from '@services/project-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { PROJECT_MODAL_MODULES } from '../create-project-modal/createProjects.modules';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import { LIMIT } from '@DomainConstants/components/planing.constants';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { ProjectServiceService } from '@services/project-service.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-monitoring-project',
  standalone: true,
  imports: [...PROJECT_MODAL_MODULES],
  templateUrl: './monitoring-project.component.html',
  styleUrl: './monitoring-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MonitoringProjectComponent implements OnInit, OnDestroy {
  public title = input.required<string>();
  public isEdit = input<ISeguimientoResponse>();
  public projectInfo = input<any>();

  public actionButton = output<boolean>();

  public monitoringList = signal<ISeguimiento[]>([]);
  public monthsList = signal<IMes[]>([]);
  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);
  public totalAprovado = signal<number>(0);
  public totalEjecutado = signal<number>(0);

  public monitoringForm!: FormGroup;
  public informativeMessage: string;
  public ICONS_CONST = ICON_IMAGES;
  public confirmModalMessageSucces: string = 'PLANNING.planes.modal.success';
  public maxDescription: number = LIMIT.advance;
  public confirmModalAction: IConfirmActionModal;
  public user: string;
  public area: string;
  public titleHeader: string;
  private unSubscribe = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private secureStorage: SecureStorageService,
    private projectsService: ProjectServiceService,
  ) { }

  ngOnInit(): void {
    console.log('Seguimiento Modal Data', `${APP_CONST.MODAL_MONITORING.modalMonitoring}${this.title()}`);
    this.setLocalInformation(this.isEdit());
    this.monthsList.update(() => this.isEdit().meses);
    this.monitoringList.update(() => this.isEdit().seguimientos);
    this.initForm();
    this.titleHeader = `${APP_CONST.MODAL_MONITORING.modalMonitoring}${this.title()}`;
    this.monitoringForm.get('mes')?.valueChanges.subscribe((mesId: any) => {
      if (mesId) {
        this.loadDataMonth(mesId);
      }
    });
  }

  private initForm(): void {
    console.log('Init all data', this.projectInfo())
    this.monitoringForm = this.fb.group({
      idProyecto: this.projectInfo()[0]?.id,
      nombreProyecto: this.projectInfo()[0]?.nombre,
      mes: [this.isEdit().meses[0]],
      productos: this.fb.array([]),
      indicadores: this.fb.array([]),
      presupuesto: this.fb.group({
        valorMensual: [0],
        totalAprovado: [0],
        totalEjecutado: [0],
      }),
      observaciones: ['']
    });
    this.loadDataMonth(this.isEdit().meses[0]);
  }

  public loadDataMonth(idMes: any): void {
    console.log('load darta', idMes)
    const selectedSeguimiento = this.isEdit().seguimientos.find((s: any) => s.mes.id === idMes?.id);
    debugger
    if (selectedSeguimiento) {
      this.monitoringForm.patchValue({
        mes: {
          id: selectedSeguimiento.mes.id,
          nombre: selectedSeguimiento.mes.nombre
        },
        presupuesto: {
          valorMensual: selectedSeguimiento.presupuesto.valorMensual,
          totalAprovado: selectedSeguimiento.presupuesto.totalAprovado,
          totalEjecutado: selectedSeguimiento.presupuesto.totalEjecutado,
        },
        observaciones: selectedSeguimiento.observaciones,
      }, { emitEvent: false });

      this.totalAprovado.update(() => selectedSeguimiento.presupuesto.totalAprovado);
      this.totalEjecutado.update(() => selectedSeguimiento.presupuesto.totalEjecutado);

      this.setProductos(selectedSeguimiento.productos);
      this.setIndicadores(selectedSeguimiento.indicadores);
      this.monitoringForm.updateValueAndValidity();
    }
  }

  private setProductos(productos: any[]) {
    const productosFormArray = this.monitoringForm.get('productos') as FormArray;
    productosFormArray.clear();
    productos.forEach(producto => {
      productosFormArray.push(
        this.fb.group({
          id: [producto?.id ?? ''],
          nombre: [producto?.nombre ?? ''],
          avanceAcumulado: [producto?.avanceAcumulado ?? ''],
          avanceCualitativo: [producto?.avanceCualitativo ?? ''],
          avanceCuantitativo: [producto?.avanceCuantitativo ?? ''],
          linkEvidencia: [producto?.linkEvidencia ?? ''],
          cantidad: [producto?.cantidad ?? ''],
          fechaInicio: [producto?.fechaInicio ?? ''],
          fechaFin: [producto?.fechaFin ?? ''],
        })
      );
    });
    this.monitoringForm.setControl('productos', productosFormArray);
  }

  private setIndicadores(indicadores: any[]) {
    const indicadoresFormArray = this.monitoringForm.get('indicadores') as FormArray;
    indicadoresFormArray.clear();
    indicadores.forEach(indicador => {
      indicadoresFormArray.push(
        this.fb.group({
          id: [indicador.id ?? ''],
          nombre: [indicador.nombre ?? ''],
          meta: [indicador.meta ?? ''],
          avanceAcumulado: [indicador.avanceAcumulado ?? ''],
          avanceCualitativo: [indicador.avanceCualitativo ?? ''],
          avanceCuantitativo: [indicador.avanceCuantitativo ?? ''],
        })
      );
    });
    this.monitoringForm.setControl('indicadores', indicadoresFormArray);
  }

  private setLocalInformation(data: ISeguimientoResponse): void {
    this.area = data?.area ?? this.secureStorage.getItem(STORAGE_CONST.userArea);
  }

  private emitAndCloseModal(): void {
    this.setMessageConfirmModal('confirm');
    this.isConfirmAction.update(() => true);
    setTimeout(() => {
      this.actionButton.emit(false);
    }, 1200);
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
          title: 'NEW_PROJECT.monitoring.successMonitoring',
          messages: 'NEW_PROJECT.monitoring.successMonitoringMessage',
        };
        break;
      case 'error':
        this.confirmModalAction = {
          origin: origin,
          title: 'NEW_PROJECT.monitoring.errorMonitoring',
          messages: message,
          textLink: null,
          textButton: 'BUTTONS.agree',
        };
        break;
    }
    this.isConfirmAction.update(() => true);
  }

  public saveSeguimiento(): void {
    console.log('save seguimiento');
    const payload = this.monitoringForm.value;
    console.log('Enviando:', payload);
    this.projectsService.saveSeguimiento(payload).pipe(takeUntil(this.unSubscribe)).subscribe(resp => {
      //TODO EVALUAR ERROR
      if (!resp) {
        this.emitAndCloseModal();
        return
      }
      this.setMessageConfirmModal('error')
    })
  }

  public openLink(url: string): void {
    if (url && url.trim() !== '') {
      const validUrl = url.startsWith('http') ? url : `https://${url}`;
      window.open(validUrl, '_blank');
    } else {
      alert('El enlace no es válido o está vacío.');
    }
  }


  // TODO Funcion Select pasra comprar Objetos por id y no por referencia
  public compareMeses(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


  get getProducts(): FormArray {
    return this.monitoringForm.get('productos') as FormArray;
  }

  get getIndicadores(): FormArray {
    return this.monitoringForm.get('indicadores') as FormArray;
  }

  ngOnDestroy(): void {
    this.unSubscribe.complete();
    this.unSubscribe.next();
  }

}
