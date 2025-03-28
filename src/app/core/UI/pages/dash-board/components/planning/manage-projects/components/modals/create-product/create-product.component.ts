import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import {
  IConfirmActionModal,
  IEmmitrAction,
  IModalEdit,
} from '@DomainInterfaces/planning.interface';
import { PRODUCTS_MODAL_MODULES } from './products-module';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { LIMIT } from '@DomainConstants/components/planing.constants';
// import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { ProjectServiceService } from '@services/project-service.service';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import {
  ICreateProductsComponent,
  IProjects,
} from '@DomainInterfaces/projectManagement.interface';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [...PRODUCTS_MODAL_MODULES],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateProductComponent {
  public ICONS_CONST = ICON_IMAGES;
  public title = input.required<string>();
  public idProject = input.required<string>();
  public isEdit = input<IModalEdit>();
  public actionButton = output<any>();

  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);

  public rubrosList = signal<any[]>([]);
  public aliadoList = signal<any[]>([]);

  public ProductsForm: FormGroup;
  public titleHeader: string;
  public confirmModalAction: IConfirmActionModal;
  public confirmModalMessageSucces: string =
    'PLANNING.lineamientos.modal.success';
  public _unSubscribe = new Subject<void>();
  public maxName: number = LIMIT.input;
  public maxDescription: number = LIMIT.textArea;

  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectServiceService,
    // private secureStorage: SecureStorageService,
  ) {
    this.loadInitData();
  }

  ngOnInit(): void {
    this.initForm(this.isEdit().idEdit);
    this.setMessage(this.isEdit().elementSelected?.nombre);
    if (this.isEdit().idEdit) {
      this.confirmModalMessageSucces =
        'PLANNING.lineamientos.modal.updateGuidelineMessage';
    }
  }

  private loadInitData(): void {
    combineLatest([
      this.projectsService.getAliado(),
      this.projectsService.getRubro(),
    ])
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(([aliados, rubros]) => {
        console.log(aliados, rubros);
        this.rubrosList.update(() => rubros);
        this.aliadoList.update(() => aliados);
      });
  }

  private initForm(isEdit: boolean): void {
    this.ProductsForm = this.createFormGroup(
      isEdit ? this.isEdit().elementSelected : null,
    );
  }

  private createFormGroup(data?: ICreateProductsComponent): FormGroup {
    return this.fb.group({
      idProyecto: [this.idProject()],
      id: [data?.id],
      nombre: [data?.nombre, Validators.required],
      fechaInicio: [
        data?.fechaInicio
          ? new Date(data.fechaInicio).toISOString().split('T')[0]
          : '',
        Validators.required,
      ],
      fechaFin: [
        data?.fechaFin
          ? new Date(data.fechaFin).toISOString().split('T')[0]
          : '',
        Validators.required,
      ],
      cantidad: [data?.cantidad, [Validators.required]],
      rubros: this.fb.array(this.initRubros(data?.rubros)),
    });
  }

  private initRubros(rubros?: any[]): FormGroup[] {
    if (rubros && rubros.length > 0) {
      return rubros.map(rubro => this.createRubroGroup(rubro));
    }
    return [this.createRubroGroup()];
  }

  private createRubroGroup(data?: any): FormGroup {
    return this.fb.group({
      idRubro: [data?.idRubro || '', Validators.required],
      concepto: [data?.concepto || '', Validators.required],
      valorTotal: [data?.valorTotal ?? 0],
      valorInterno: [data?.valorInterno ?? 0],
      valorExterno: [data?.valorExterno ?? 0],
      idAliado: [data?.idAliado],
    });
  }

  public setTotalValueRubro(index: number): void {
    const rubroGroup = this.rubros.at(index) as FormGroup;
    if (!rubroGroup) return;
    const valorInterno = Number(rubroGroup.get('valorInterno')?.value) || 0;
    const valorExterno = Number(rubroGroup.get('valorExterno')?.value) || 0;
    let sum = valorExterno + valorInterno;
    rubroGroup.get('valorTotal')?.setValue(sum);
    this.currencytotalValue(sum);
  }

  private currencytotalValue(sum: number): void {
    const inputElement: HTMLInputElement = document.querySelector(
      `[formControlName="valorTotal"]`,
    ) as HTMLInputElement;

    if (inputElement) {
      inputElement.value = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
      }).format(sum);
    }
  }

  public addRubro(data?: any): void {
    this.rubros.push(this.createRubroGroup(data));
  }

  public removeRubro(index: number): void {
    this.rubros.removeAt(index);
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
      case 'error':
        this.confirmModalAction = {
          origin: origin,
          title: 'PLANNING.lineamientos.modal.errorTitle',
          messages: message,
          textLink: null,
          textButton: 'BUTTONS.agree',
        };
        break;
      default:
        this.confirmModalAction = {
          origin: origin,
          title: 'PLANNING.lineamientos.modal.confirmDelete',
          messages: 'PLANNING.lineamientos.modal.messageDelete',
          textLink: 'BUTTONS.stayHere',
          textButton: 'BUTTONS.confirmDelete',
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
      case 'error':
        this.isConfirmAction.update(() => false);
        break;
      default:
        this.deleteForm(isConfirm.action);
        break;
    }
  }

  public cancelForm(action: boolean) {
    let actionEmmmiter = {
      action: false,
      object: null,
    };
    if (action) {
      this.actionButton.emit(actionEmmmiter);
    } else {
      this.isConfirmAction.update(() => false);
    }
  }

  public deleteForm(action: boolean): void {
    if (action) {
      this.deleteGuideline(this.isEdit().elementSelected.id);
    } else {
      this.isConfirmAction.update(() => false);
    }
    console.log('idGuideline', this.isEdit().elementSelected.id);
  }

  private deleteGuideline(productId: string): void {
    console.log('Delete Product', productId);
  }

  public setMessage(title: string = null): void {
    console.log('Title ', title);
    this.titleHeader = title
      ? title
      : `${APP_CONST.MODAL_NEW_PRODUCT.modalProject}${this.title()}`;
  }

  public processData(): void {
    console.log('Save form', this.ProductsForm);
    let body = this.ProductsForm.value;
    this.projectsService.createProduct(body).subscribe((resp: IProjects) => {
      console.log('New Response', resp);
      if (resp.nombre) {
        let actionEmmmiter = {
          action: true,
          object: resp,
        };
        this.actionButton.emit(actionEmmmiter);
        console.log('update Plans');
      }
    });
  }

  get rubros(): FormArray {
    return this.ProductsForm.get('rubros') as FormArray;
  }
}
