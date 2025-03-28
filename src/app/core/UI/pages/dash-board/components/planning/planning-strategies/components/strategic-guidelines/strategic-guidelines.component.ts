import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  OnDestroy,
} from '@angular/core';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { VIEW_MORE_CONST } from '@DomainConstants/shared/viewMore.constants';
import { GUIDElINES_MODULES } from './strategicGuidelines.modules';
import { PlanningService } from '@services/planningService.service';
import {
  IGetGuidelinesResponse,
  IModalEdit,
} from '@DomainInterfaces/planning.interface';
import { INIT_EDIT } from '@DomainConstants/components/planing.constants';
import { Subject, takeUntil } from 'rxjs';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'strategic-guidelines',
  standalone: true,
  imports: [...GUIDElINES_MODULES],
  templateUrl: './strategic-guidelines.component.html',
  styleUrl: './strategic-guidelines.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategicGuidelinesComponent implements OnInit, OnDestroy {
  public viewMore = VIEW_MORE_CONST;
  public ICONS_CONST = ICON_IMAGES;
  public messageEmpty = APP_CONST.MESSAGES.withoutInfoLE;
  public isModal = signal<boolean>(false);
  public ActiveGuideLines: IGetGuidelinesResponse[];
  public isEditGuideline: IModalEdit = { ...INIT_EDIT };
  public modalTitle: string = APP_CONST.MODAL_GUIDELINES.initTitle;
  public InactveGuidelines: IGetGuidelinesResponse[];
  public isViewDetail: boolean[] = [];
  public isViewDetailInactive: boolean[] = [];
  private _unSubscribe = new Subject<void>();
  public isData = signal<boolean>(false);
  private currentID: number;
  private currentIDInactive: number;

  constructor(
    private planningService: PlanningService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.loadLineamientos();
  }

  private loadLineamientos(): boolean {
    const idMuseo = this.secureStorage.getItem(STORAGE_CONST.idMuseum);
    this.isData.update(() => false);
    this.planningService
      .getGuidelines(Number(idMuseo))
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((guidelines: IGetGuidelinesResponse[]) => {
        console.log('Load Lineamientos', guidelines);
        this.ActiveGuideLines = guidelines.filter(
          lineamiento => lineamiento.activo,
        );
        this.InactveGuidelines = guidelines.filter(
          lineamiento => !lineamiento.activo,
        );
        this.isData.update(() => true);
      });
    return this.isData();
  }

  public viewDetailGuideline(ID: number): void {
    if (ID !== this.currentID) {
      this.isViewDetail[this.currentID] = false;
    }
    this.isViewDetail[ID] = !this.isViewDetail[ID];
    this.currentID = ID;
  }

  public viewDetailGuidelineInactive(ID: number): void {
    this.isViewDetailInactive[this.currentIDInactive] = false;
    this.isViewDetailInactive[ID] = !this.isViewDetailInactive[ID];
    this.currentIDInactive = ID;
  }

  public onSubmit(): void {
    console.log('Submit Form');
  }

  public viewList(section: string): void {
    this.viewMore[section] = !this.viewMore[section];
  }

  public openCloseModal(
    isEdit: boolean = false,
    guidelineSelected?: IGetGuidelinesResponse,
  ): void {
    console.log('Closed MOdal');
    this.isEditGuideline = { ...INIT_EDIT };
    if (isEdit) {
      const edit: IModalEdit = {
        idEdit: isEdit,
        elementSelected: guidelineSelected,
      };
      this.isEditGuideline = edit;
      console.log('EditModal', isEdit, guidelineSelected);
    }
    setTimeout(() => {
      this.isModal.update(value => !value);
    }, 100);
  }

  public closeModalEvent(isUpdate: boolean): void {
    if (isUpdate) {
      this.loadLineamientos();
    }
    this.isModal.update(value => !value);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
