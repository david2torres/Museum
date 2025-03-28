import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import {
  IConfirmActionModal,
  IEmmitrAction,
  IGetGuidelinesResponse,
  IModalEdit,
  IPoliticasResponse,
  ISaveGuideLines,
} from '@DomainInterfaces/planning.interface';
import { PlanningService } from '@services/planningService.service';
import { GUIDElINES_MODAL_MODULES } from './guideLines.modules';
import { Subject, takeUntil } from 'rxjs';
import {
  LIMIT,
  PLANNING_SERVICE_CONST,
} from '@DomainConstants/components/planing.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'guidelines-modal',
  standalone: true,
  imports: [...GUIDElINES_MODAL_MODULES],
  templateUrl: './guidelines-modal.component.html',
  styleUrl: './guidelines-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidelinesModalComponent implements OnInit, OnDestroy {
  public ICONS_CONST = ICON_IMAGES;
  public title = input.required<string>();
  public isEdit = input<IModalEdit>();
  public actionButton = output<boolean>();

  public isConfirmAction = signal<boolean>(false);
  public isConfirm = signal<boolean>(false);
  public policiansList = signal<IPoliticasResponse[]>([]);
  
  public GuideLinesForm: FormGroup;
  public titleHeader: string;
  public confirmModalAction: IConfirmActionModal;
  public _unSubscribe = new Subject<void>();
  public confirmModalMessageSucces: string =
    'PLANNING.lineamientos.modal.success';
  public maxName: number = LIMIT.input;

  constructor(
    private fb: FormBuilder,
    private planningService: PlanningService,
    private secureStorage: SecureStorageService,
  ) {
    this.loadPolicians();
  }

  ngOnInit(): void {
    this.initForm(this.isEdit().idEdit);
    this.setMessage(this.isEdit().elementSelected?.nombre);
    if (this.isEdit().idEdit) {
      this.confirmModalMessageSucces =
        'PLANNING.lineamientos.modal.updateGuidelineMessage';
    }
  }

  private loadPolicians(): void {
    this.planningService
      .getPolicies()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((response: IPoliticasResponse[]) => {
        this.policiansList.update(() => response);
        this.onSelectedOption(this.isEdit().elementSelected?.politica.id);
      });
  }

  private initForm(isEdit: boolean): void {
    this.GuideLinesForm = this.fb.group({
      forms: this.fb.array([
        this.createFormGroup(isEdit ? this.isEdit().elementSelected : null),
      ]),
    });
  }

  private createFormGroup(data?: IGetGuidelinesResponse): FormGroup {
    return this.fb.group({
      id: [''],
      nombre: [data?.nombre ?? '', Validators.required],
      idPolitica: [data?.politica?.id ?? null, Validators.required],
      activo: [data?.activo ?? true],
      fechaInicio: [this.formatDate(String(data?.politica?.fechaInicio ?? ''))],
      fechaFin: [this.formatDate(String(data?.politica?.fechaFin ?? ''))],
      entidad: [data?.politica?.entidad.id ?? null],
      nameEntidad: [data?.politica?.entidad.nombre ?? null],
      tipoEntidad: [data?.politica?.cobertura ?? null],
      idMuseo: [this.secureStorage.getItem(STORAGE_CONST.idMuseum)],
    });
  }

  public addForm() {
    this.getGuidelinesForm.push(this.createFormGroup());
  }

  public removeForm(index: number) {
    this.getGuidelinesForm.removeAt(index);
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
      this.deleteGuideline(this.isEdit().elementSelected.id);
    } else {
      this.isConfirmAction.update(() => false);
    }
    console.log('idGuideline', this.isEdit().elementSelected.id);
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

  private deleteGuideline(guideline: string): void {
    this.planningService
      .deleteGuidelines(guideline)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(resp => {
        console.log('Delete GuideLine', resp);
        setTimeout(() => {
          this.actionButton.emit(true);
        }, 200);
      });
  }

  public onSelectedOption(optionId: string, index?: number): void {
    const selectedOption = this.policiansList().find(
      option => option.id === optionId,
    );

    this.getGuidelinesForm?.at(index)?.patchValue({
      fechaFin: this.formatDate(
        selectedOption.fechaFin ? String(selectedOption.fechaFin) : '',
      ),
      fechaInicio: this.formatDate(
        selectedOption.fechaInicio ? String(selectedOption.fechaInicio) : '',
      ),
      entidad: selectedOption.entidad.id,
      nameEntidad: selectedOption.entidad.nombre,
      tipoEntidad: selectedOption.cobertura,
    });
  }

  public changeActive(): void {
    const currentValue = this.GuideLinesForm.get('activo')?.value;
    this.GuideLinesForm.patchValue({
      activo: !currentValue,
    });
  }

  public setMessage(title: string = null): void {
    console.log('Title ', title);
    this.titleHeader = title
      ? title
      : `${APP_CONST.MODAL_GUIDELINES.modalGuidelines}${this.title()}`;
  }

  public processData(): void {
    const form = this.GuideLinesForm.value.forms;
    const processData = form.map(value => ({
      id: '',
      nombre: value.nombre,
      idPolitica: value.idPolitica,
      activo: value.activo,
      idMuseo: value.idMuseo,
    }));
    this.saveForm(processData);
  }

  public saveForm(form: ISaveGuideLines): void {
    if (this.isEdit().idEdit) {
      form[0].id = this.isEdit().elementSelected.id;
    }

    const serviceFunction = this.isEdit().idEdit
      ? PLANNING_SERVICE_CONST.edit_guideline
      : PLANNING_SERVICE_CONST.create_guideline;

    this.planningService[serviceFunction](form)
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(response => {
        console.log('Response Create', response);
        if (response?.error) {
          this.setMessageConfirmModal('error', response?.error.message);
        } else {
          this.isConfirm.update(() => true);
          setTimeout(() => {
            this.actionButton.emit(true);
          }, 2000);
        }
      });
    console.log('Value Form', form);
  }

  private formatDate(dateString: string): string {
    if (dateString === '') {
      return '';
    }
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public get getGuidelinesForm(): FormArray {
    return this.GuideLinesForm.get('forms') as FormArray;
  }
  // public onRadioChange(selectedValue: string): void {
  //   this.selectedOption.cobertura = selectedValue;
  // }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
