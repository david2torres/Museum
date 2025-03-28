import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ORIGIN_TABLE } from '@DomainConstants/components/management-projects.constants';
import {
  IModalNewProject,
  IProjectsComponent,
  ISeguimientoResponse,
} from '@DomainInterfaces/projectManagement.interface';
import { ProjectServiceService } from '@services/project-service.service';
import { DetailContentPestanasComponent } from '@shared/components/detai-content-pestanas/detail-content-pestanas.component';
// import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { Subject, takeUntil } from 'rxjs';
import { CreateProjectModalComponent } from '../modals/create-project-modal/create-project-modal.component';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { INIT_EDIT } from '@DomainConstants/components/planing.constants';
import { CommonModule } from '@angular/common';
import { MonitoringProjectComponent } from '../modals/monitoring-project/monitoring-project.component';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DetailContentPestanasComponent,
    CreateProjectModalComponent,
    MonitoringProjectComponent,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private _unSubscribe = new Subject<void>();
  public projectsList = signal<IProjectsComponent[]>([]);
  public seguimientoList = signal<ISeguimientoResponse>(null);
  public projectInfo = signal<any>(null);
  public isLoading = signal<boolean>(false);
  public isModal = signal<boolean>(false);
  public isMonitoring = signal<boolean>(false);
  public isEditProject: IModalNewProject = { ...INIT_EDIT };

  public modalTitle: string = APP_CONST.MODAL_NEW_PROJECT.initTitle;

  public optionsView = {
    isPaginator: true,
    isCreate: true,
    isHeaders: [
      'ID de Proyecto',
      'Nombre del proyecto',
      'Área responsable',
      'Estado',
    ],
    isEdit: true,
    isSeguimiento: true,
    isEvaluate: false,
    isSearch: true,
    origin: ORIGIN_TABLE.projects,
  };

  constructor(private projectService: ProjectServiceService,  private secureStorage: SecureStorageService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): boolean {
    let isData: boolean = false;
    this.isLoading.update(() => false);
    this.projectService
      .getProjects()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((projects: IProjectsComponent[]) => {
        this.projectsList.update(() => projects);
        this.isLoading.update(() => true);
        isData = true;
        console.log('All Projects Init', projects);
      });
    return isData;
  }

  public openCloseModal(
    isEdit: boolean = false,
    elementSelected?: any,
    idPlan?: string,
  ): void {
    console.log('Crear nuevo elemento', isEdit, elementSelected, idPlan);
    this.isEditProject.elementSelected = elementSelected;
    this.isModal.update(value => !value);
  }

  public onEdit(element: any): void {
    this.openCloseModal(true, element);
  }

  onSeguimiento(data: any) {
    console.log('Seguimiento en el data con id:', data);
    this.projectService.getSeguimiento(data.id, this.secureStorage.getItem(STORAGE_CONST.userEmail)).subscribe((resp: ISeguimientoResponse) => {
      console.log('respomse Seguimientos', resp)
      this.projectInfo.update(() => [{id: data.id,  nombre: data.nombre, numero: data.numero}])
      this.seguimientoList.update(() => resp)
      this.isMonitoring.update(() => true);
    })
    // this.openCloseModal(true, data.element);
  }

  onViewProject(element: any) {
    console.log('Seguimiento en el elemento con id:', element);
    this.openCloseModal(true, element);
  }

  public closeModalEvent(isUpdate: boolean, actionEvent): void {
    console.log('closeModalEvent', isUpdate);
    this.loadProjects();
    this[actionEvent].update(value => !value);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
