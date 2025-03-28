import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { INDICATORS_MODULES } from './indicators.modules';
import { VIEW_MORE_CONST } from '@DomainConstants/shared/viewMore.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import {
  IModalEdit,
  Indicadores,
  ITipoIndicador,
  ITypeIndicatorsRequest,
  IUnidadesMedida,
} from '@DomainInterfaces/planning.interface';
import { INIT_EDIT } from '@DomainConstants/components/planing.constants';
import { Subject, takeUntil } from 'rxjs';
import { PlanningService } from '@services/planningService.service';

@Component({
  selector: 'indicators',
  standalone: true,
  imports: [...INDICATORS_MODULES],
  templateUrl: './indicators.component.html',
  styleUrl: './indicators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorsComponent implements OnInit, OnDestroy {
  public viewMore = VIEW_MORE_CONST;
  public ICONS_CONST = ICON_IMAGES;
  public messageEmpty = APP_CONST.MESSAGES.withoutInfoIn;
  public isModal = signal<boolean>(false);
  public isData = signal<boolean>(false);
  public indicatorsList = signal<ITypeIndicatorsRequest[]>([]);
  public unidadesList = signal<IUnidadesMedida[]>([]);
  public clasificacionList = signal<ITipoIndicador[]>([]);
  public isEditGuideline: IModalEdit = { ...INIT_EDIT };
  public modalTitle: string = APP_CONST.MODAL_GUIDELINES.initTitle;
  public isViewDetail: boolean[] = [];
  public isViewBlock: boolean[] = [];
  private _unSubscribe = new Subject<void>();
  private currentID: string;

  constructor(private planningService: PlanningService) {}

  ngOnInit(): void {
    this.loadUnidades();
    this.loadClasificacion();
    this.loadIndicatorsList();
  }

  private loadIndicatorsList(): boolean {
    this.isData.update(() => false);
    this.planningService
      .getTypeIndicators()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((indicatorslist: ITypeIndicatorsRequest[]) => {
        this.indicatorsList.update(() => indicatorslist);
        console.log('Indicators List', this.indicatorsList(), indicatorslist);
        this.isData.update(() => true);
      });
    return this.isData();
  }

  public openCloseModal(
    isEdit: boolean = false,
    guidelineSelected?: Indicadores,
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

  public viewDetailIndicator(ID: string): void {
    console.log('View Detail', ID);
    if (ID !== this.currentID) {
      this.isViewDetail[this.currentID] = false;
    }
    this.isViewDetail[ID] = !this.isViewDetail[ID];
    this.currentID = ID;
  }

  public viewIndicator(id: number): void {
    this.isViewBlock[id] = !this.isViewBlock[id];
  }

  public closeModalEvent(isUpdate: boolean): void {
    if (isUpdate) {
      this.loadIndicatorsList();
    }
    this.isModal.update(value => !value);
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

  public getNameByID(id: string, orign: number): string {
    let name: string;
    const unidadArr = this.unidadesList();
    console.log('Unidad', this.unidadesList());
    console.log('Clasificacion ', this.clasificacionList());
    if (orign === 1) {
      const unidad = unidadArr.find(unidad => unidad.id === id);
      name = unidad.nombre === 'Porcentaje' ? '%': '';
    } else {
      const clasificacion = this.clasificacionList().find(
        clasificacion => clasificacion.id === id,
      );
      console.log('clasificacion', clasificacion, this.clasificacionList());
      name = clasificacion.nombre;
    }
    return name;
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
