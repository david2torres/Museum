/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { PLANS_MODULES } from './strategicPlans.modules';
import {
  // IEjesEstrategico,
  IModalEditEje,
  IStrategicPlansResponse,
} from '@DomainInterfaces/planning.interface';
import { PlanningService } from '@services/planningService.service';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { INIT_EDIT } from '@DomainConstants/components/planing.constants';
import { Subject, takeUntil } from 'rxjs';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'strategic-plans',
  standalone: true,
  imports: [...PLANS_MODULES],
  templateUrl: './strategic-plans.component.html',
  styleUrl: './strategic-plans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategicPlansComponent implements OnInit, OnDestroy {
  public isModal = signal<boolean>(false);
  public ICONS_CONST = ICON_IMAGES;
  public planList = signal<IStrategicPlansResponse[]>([]);
  public messageEmpty = APP_CONST.MESSAGES.withoutInfoPE;
  public modalTitle: string = APP_CONST.MODAL_PLANS.initTitle;
  public currentDate = new Date();
  public isEditEje: IModalEditEje = { ...INIT_EDIT };
  public isViewDetail: boolean[] = [];
  public isViewEjes: boolean[] = [];
  public isExpandedText: boolean[] = [];
  private _unSubscribe = new Subject<void>();
  private currentID: string;
  public isLoading = signal<boolean>(false);

  constructor(
    private planningService: PlanningService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  private loadPlans(): boolean {
    let isData: boolean = false;
    const idMuseo = this.secureStorage.getItem(STORAGE_CONST.idMuseum);
    this.planningService
      .getStrategicPlans(Number(idMuseo))
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((plans: IStrategicPlansResponse[]) => {
        isData = true;
        this.transformData(plans);
        this.isLoading.update(() => true);
      });
    return isData;
  }

  private transformData(plans: IStrategicPlansResponse[]): void {
    const newPlans = plans.map((plan: any) => ({
      ...plan,
      fechaFin: new Date(plan.fechaFin),
      fechaInicio: new Date(plan.fechaInicio),
    }));
    this.planList.update(() => newPlans);
    console.log('Transform Plans', newPlans, this.planList());
  }

  public openCloseModal(
    isEdit: boolean = false,
    elementSelected?: any,
    idPlan?: string,
  ): void {
    console.log('Open Modal', elementSelected, idPlan);
    this.isEditEje = { ...INIT_EDIT };
    if (isEdit) {
      const edit: IModalEditEje = {
        idEdit: isEdit,
        elementSelected: elementSelected,
        idPlan: idPlan,
      };
      this.isEditEje = edit;
      console.log('Edi Modal hERE', isEdit, elementSelected);
    }
    this.isModal.update(value => !value);
  }

  public viewEjes(id: number): void {
    console.log('view ejes');
    this.isViewEjes[id] = !this.isViewEjes[id];
  }

  public viewDetailPlan(ID: string): void {
    console.log('View More');
    if (ID !== this.currentID) {
      this.isViewDetail[this.currentID] = false;
    }
    this.isViewDetail[ID] = !this.isViewDetail[ID];
    this.currentID = ID;
  }

  public expandedText(id: string): void {
    this.isExpandedText[id] = !this.isExpandedText[id];
  }

  public closeModalEvent(isUpdate: boolean): void {
    if (isUpdate) {
      this.loadPlans();
    }
    this.isModal.update(value => !value);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
