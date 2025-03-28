import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  OnInit,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { IProjectsComponent } from '@DomainInterfaces/projectManagement.interface';
import { DETAIL_PESTANAS_MODULES } from './detailContentPestanas.modules';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import {
  ICON_IMAGES,
  MENU_ICONS,
} from '@DomainConstants/shared/icons-images.constants';
import {
  INIT_POSITION_CONST,
  STATUS_CLASS_MAP_CONST,
} from '@DomainConstants/components/detail-content.constants';
import {
  IOPTION_VIEW,
  IStatusClassMap,
} from '@DomainInterfaces/detail-content.interface';
import { ProjectServiceService } from '@services/project-service.service';

@Component({
  selector: 'detail-content-pestanas',
  standalone: true,
  imports: [...DETAIL_PESTANAS_MODULES],
  templateUrl: './detail-content-pestanas.component.html',
  styleUrl: './detail-content-pestanas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContentPestanasComponent implements OnInit {
  @ViewChild('filterButton') filterButton!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  public optionsView = input.required<IOPTION_VIEW>();
  public projectsList = input.required<IProjectsComponent[]>();
  public create = output<void>();
  public edit = output<any>();
  public seguimiento = output<any>();
  public viewProject = output<any>();
  public evaluate = output<boolean>();

  public filteredProjectsList = signal<IProjectsComponent[]>([]);
  public itemsPerPage = signal(10);
  public paginators = signal<Record<number, number>>({});
  public statesList = signal<any[]>([]);
  public areasList = signal<any[]>([]);
  public isConfirm = signal<boolean>(false);
  public confirmModalMessageSucces: string = 'PLANNING.lineamientos.modal.success';
  public tooltipButton: string = 'SHARED_MESSAGES.viewEditTooltip';

  public keyword = '';
  public startDate: string | null = null;
  public endDate: string | null = null;
  public selectedState: string | null = null;
  public selectedArea: string | null = null;
  public isViewDetail: boolean[] = [];
  private currentID: string;

  public openFilter: boolean = false;
  public statusClassMap: IStatusClassMap = STATUS_CLASS_MAP_CONST;

  public modalPosition = INIT_POSITION_CONST;
  public ICONS_CONST = ICON_IMAGES;
  public MENU_ICONS = MENU_ICONS;
  public messageEmpty = APP_CONST.MESSAGES.withouProject;

  constructor(private projectService: ProjectServiceService) {
    // this.filteredProjectsList.update(() => this.projectsList());
  }

  ngOnInit() {
    console.log('DATA PRINT', this.projectsList());
    this.filteredProjectsList.update(() => this.projectsList());
    this.loadInitialData();
    this.initializePaginators(this.filteredProjectsList());
  }

  private loadInitialData(): void {
    this.projectService.getStatesProjects().subscribe(states => {
      this.statesList.update(() => states);
    });
    this.projectService.getAreas().subscribe(areas => {
      this.areasList.update(() => areas);
    });
  }

  private initializePaginators(projectsList: IProjectsComponent[]): void {
    projectsList.forEach((_, index) => {
      this.paginators.update(p => ({ ...p, [index]: 1 }));
    });
  }

  public applyFilters(): void {
    const keyword = this.keyword.toLowerCase();
    const startDate = this.startDate ? new Date(this.startDate) : null;
    const endDate = this.endDate ? new Date(this.endDate) : null;
    const selectedState = this.selectedState ? this.selectedState : null;
    const selectedArea = this.selectedArea ? this.selectedArea : null;

    const filteredProjects = this.projectsList().map(list => ({
      ...list,
      proyectos: list.proyectos.filter(project => {
        const matchesKeyword =
          !keyword ||
          project.nombre.toLowerCase().includes(keyword) ||
          project.numero.toLowerCase().includes(keyword) ||
          project.areaResponsable.id.toLowerCase().includes(keyword) ||
          project.estado.id.toLowerCase().includes(keyword);

        const projectStartDate = project.fechaInicio
          ? new Date(project?.fechaInicio)
          : null;
        const projectEndDate = project.fechaFin
          ? new Date(project.fechaFin)
          : null;

        const matchesDate =
          (!startDate || (projectStartDate && projectStartDate >= startDate)) &&
          (!endDate || (projectEndDate && projectEndDate <= endDate));

        const matchesState = !selectedState || project.estado.id === selectedState;

        const matchesArea = !selectedArea || project.areaResponsable.id === selectedArea;

        return matchesKeyword && matchesDate && matchesState && matchesArea;
      }),
    }));
    this.setOperationFilter(filteredProjects);
  }

  private setOperationFilter(filteredProjects: IProjectsComponent[]): void {
    let isDataFiltered = filteredProjects[0].proyectos.length > 0;
    this.filteredProjectsList.update(() =>
      isDataFiltered ? filteredProjects : this.projectsList(),
    );

    if (isDataFiltered) {
      this.isConfirm.update(() => false);
      this.openFilterModal();
      this.initializePaginators(this.filteredProjectsList());
      return;
    }
    this.isConfirm.update(() => true);
    setTimeout(() => {
      this.isConfirm.update(() => false);
      this.cleanValueFilters();
    }, 3000);
  }

  public viewDetailProject(name: string): void {
    if (name !== this.currentID) {
      this.isViewDetail[this.currentID] = false;
    }
    this.isViewDetail[name] = !this.isViewDetail[name];
    this.currentID = name;
    this.cleanValueFilters();
  }

  private cleanValueFilters(): void {
    this.keyword = '';
    this.startDate = null;
    this.endDate = null;
    this.selectedState = null;
    this.selectedArea = null;
    this.filteredProjectsList.set(this.projectsList());
  }

  public clearFilter(): void {
    this.cleanValueFilters();
    this.openFilterModal();
  }

  public getPaginatedData(sectionIndex: number): any[] {
    const currentPage = this.paginators()[sectionIndex] || 1;
    const start = (currentPage - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.filteredProjectsList()[sectionIndex].proyectos?.slice(
      start,
      end,
    );
  }

  public getTotalPages(sectionIndex: number): number {
    return Math.ceil(
      this.filteredProjectsList()[sectionIndex].proyectos.length /
        this.itemsPerPage(),
    );
  }

  public nextPage(sectionIndex: number): void {
    const totalPages = this.getTotalPages(sectionIndex);
    if (this.paginators()[sectionIndex] < totalPages) {
      this.paginators.update(p => ({
        ...p,
        [sectionIndex]: p[sectionIndex] + 1,
      }));
    }
  }

  public prevPage(sectionIndex: number): void {
    if (this.paginators()[sectionIndex] > 1) {
      this.paginators.update(p => ({
        ...p,
        [sectionIndex]: p[sectionIndex] - 1,
      }));
    }
  }

  public getClass(status: string): string {
    return this.statusClassMap[status] || 'estado-default';
  }

  public onCreate(): void {
    console.log('OnCreate');
    this.create?.emit();
  }

  public onEdit(objectSelected: any): void {
    let fechaFin = new Date(objectSelected.fechaFin);
    let anioFin = fechaFin.getFullYear();
    let anioActual = new Date().getFullYear();

    if (anioFin < anioActual) {
      return;
    }
    if (this.edit) {
      this.edit.emit(objectSelected);
    }
  }

  public onSeguimiento(objectSelected: any): void {
    if (this.seguimiento) {
      console.log('On Seguimiento Action', objectSelected)
      this.seguimiento.emit(objectSelected);
    }
  }

  public onViewProject(objectSelected: any): void {
    if (this.viewProject) {
      objectSelected.readOnly = true
      this.viewProject.emit(objectSelected);
    }
  }

  public onEvaluate(itemId: boolean): void {
    if (this.evaluate) {
      this.evaluate.emit(itemId);
    }
  }

  protected openFilterModal(): void {
    this.openFilter = !this.openFilter;
    if (this.openFilter) {
      this.setPosition();
    }
  }

  private setPosition(): void {
    const buttonRect = this.filterButton.nativeElement.getBoundingClientRect();
    const contentRect = this.content.nativeElement.getBoundingClientRect();

    this.modalPosition = {
      top:
        buttonRect.top -
        contentRect.top +
        this.content.nativeElement.scrollTop +
        35,
      left: buttonRect.left - 490,
    };
  }
}
