import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ORIGIN_TABLE } from '@DomainConstants/components/management-projects.constants';
import { INIT_EDIT } from '@DomainConstants/components/planing.constants';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { IModalNewProject, IProjectsComponent } from '@DomainInterfaces/projectManagement.interface';
import { ProjectServiceService } from '@services/project-service.service';
import { DetailContentPestanasComponent } from '@shared/components/detai-content-pestanas/detail-content-pestanas.component';
import { Subject, takeUntil } from 'rxjs';
import { CreateProjectModalComponent } from '../modals/create-project-modal/create-project-modal.component';
// import { SecureStorageService } from '@shared/security/storage/secure-storage.service';

@Component({
  selector: 'app-evaluation-projects',
  standalone: true,
  imports: [DetailContentPestanasComponent, CreateProjectModalComponent],
  templateUrl: './evaluation-projects.component.html',
  styleUrl: './evaluation-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluationProjectsComponent implements OnInit, OnDestroy {
  private _unSubscribe = new Subject<void>();
  public projectsList = signal<IProjectsComponent[]>([]);
  public isLoading = signal<boolean>(false);

    public isModal = signal<boolean>(false);
    public isEditProject: IModalNewProject = { ...INIT_EDIT };
    public modalTitle: string = APP_CONST.MODAL_NEW_PROJECT.initTitle;
  
  public optionsView = {
    isPaginator: true,
    isCreate: false,
    isHeaders: [],
    isEdit: false,
    isSeguimiento: false,
    isEvaluate: false,
    isSearch: true,
    origin: ORIGIN_TABLE.evaluationProjects
  };

  constructor(private projectService: ProjectServiceService) {}

  ngOnInit(): void {
    this.loadEvalautionProjects();
  }

  private loadEvalautionProjects(): boolean {
    let isData: boolean = false;
    this.projectService
      .getEvaluationProjects()
      .pipe(takeUntil(this._unSubscribe))
      .subscribe((projects: IProjectsComponent[]) => {
        isData = true;
        this.projectsList.update(() => projects);
        this.isLoading.update(() => true);
        console.log('EvaluationProjectSimulate Init', projects);
      });
    return isData;
  }

  onCreate() {
    console.log('Crear nuevo elemento');
  }

  onEdit(id: any) {
    console.log('Editar elemento con id:', id);
  }

  onSeguimiento(id: any) {
    console.log('Seguimiento en el elemento con id:', id);
  }

  public closeModalEvent(isUpdate: boolean): void {
    console.log('closeModalEvent', isUpdate);
    this.isModal.update(value => !value);
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

  onViewProject(element: any) {
    console.log('Seguimiento en el elemento con id:', element);
    this.openCloseModal(true, element);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
