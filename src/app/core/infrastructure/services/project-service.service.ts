/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *  NIVEL DE SERVICIO
 *  Recibe datos realizados por medio de la peticion https de UserAuthRepository
 *  maneja toda la manipulacion y Almacenamiento de datos
 */
import { Injectable } from '@angular/core';
import { ProjectsRepositoryService } from '../repositories/projects-repository.service';
import {
  IAliados,
  IAreasPorMuseo,
  IComunidades,
  ICreateProject,
  IDepartamentos,
  IDynamicListPorjects,
  IEstadosProyectos,
  IGenericList,
  IGrupoEtario,
  IProducto,
  IProjects,
  IProjectsComponent,
  ISaveSeguimiento,
  ISeguimientoResponse,
  ITipoAporte,
  ITipologias,
} from '@DomainInterfaces/projectManagement.interface';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(
    private projectsRepository: ProjectsRepositoryService,
    private http: HttpClient,
  ) {}

  public getProjects(): Observable<IProjectsComponent[]> {
    return this.projectsRepository.getProjects();
  }

  public getCollaborationProjects(): Observable<IProjectsComponent[]> {
    return this.projectsRepository.getCollaborationProjects();
  }

  public getEvaluationProjects(): Observable<IProjectsComponent[]> {
    return this.projectsRepository.getEvaluationProjects();
  }

  public getStatesProjects(): Observable<IEstadosProyectos[]> {
    return this.projectsRepository.getStatesProjects();
  }

  public createProject(body: ICreateProject): Observable<IProjects> {
    return this.projectsRepository.createProject(body);
  }

  public createProduct(body: IProducto): Observable<IProjects> {
    return this.projectsRepository.createProduct(body);
  }

  public getAreas(): Observable<IAreasPorMuseo[]> {
    return this.projectsRepository.getAreas();
  }

  public getTipologias(): Observable<ITipologias[]> {
    return this.projectsRepository.getTipologias();
  }

  public getComunidades(): Observable<IComunidades[]> {
    return this.projectsRepository.getComunidades();
  }

  public getGrupoEtario(): Observable<IGrupoEtario[]> {
    return this.projectsRepository.getGrupoEtario();
  }

  public getDepartamento(): Observable<IDepartamentos[]> {
    return this.projectsRepository.getDepartamento();
  }

  public getAliado(): Observable<IAliados[]> {
    return this.projectsRepository.getAliado();
  }

  public getRubro(): Observable<IGenericList[]> {
    return this.projectsRepository.getRubro();
  }

  public getTipoAporte(): Observable<ITipoAporte[]> {
    return this.projectsRepository.getTipoAporte();
  }

  public getSeguimiento(idProyecto: string, userEmail:string): Observable<ISeguimientoResponse> {
    return this.projectsRepository.getSeguimiento(idProyecto, userEmail);
  }

  public saveSeguimiento(body: ISaveSeguimiento): Observable<any> {
    return this.projectsRepository.saveSeguimiento(body);
  }
  
  public getGeneralInformationProject(idProyecto: string): Observable<IDynamicListPorjects[]> {
    return this.projectsRepository.getGeneralInformationProject(idProyecto);
  }

  public downloadReport(idProject: string): Observable<Blob> {
    return this.projectsRepository.downloadReport(idProject);
  }

  public downloadExcel(productos: IProducto[]): Observable<void> {
    return this.http
      .get('/assets/templates/template.xlsx', { responseType: 'arraybuffer' })
      .pipe(
        switchMap(templateBuffer => {
          const workbook = XLSX.read(templateBuffer, { type: 'array' });
          const productosSheet = workbook.Sheets['Productos'];
          productosSheet[`A1`] = { v: 'ID Proyecto' };
          productosSheet[`B1`] = { v: 'ID Producto' };
          productosSheet[`C1`] = { v: 'Nombre Producto' };
          productosSheet[`D1`] = { v: 'Fecha Inicio' };
          productosSheet[`E1`] = { v: 'Fecha Fin' };
          productosSheet[`F1`] = { v: 'Cantidad' };
          productosSheet['!ref'] = 'A1:Z100';
          productos.forEach((producto, index) => {
            const row = index + 2;
            const fechaInicio =
              producto.fechaInicio instanceof Date
                ? producto.fechaInicio
                : new Date(producto.fechaInicio);
            const fechaFin =
              producto.fechaFin instanceof Date
                ? producto.fechaFin
                : new Date(producto.fechaFin);

            productosSheet[`A${row}`] = { v: producto.idProyecto };
            productosSheet[`B${row}`] = { v: producto.id };
            productosSheet[`C${row}`] = { v: producto.nombre };
            productosSheet[`D${row}`] = {
              v: fechaInicio.toISOString().split('T')[0],
            };
            productosSheet[`E${row}`] = {
              v: fechaFin.toISOString().split('T')[0],
            };
            productosSheet[`F${row}`] = { v: producto.cantidad };
          });

          const rubrosSheet = workbook.Sheets['Rubros'];
          rubrosSheet[`A1`] = { v: 'ID Rubro' };
          rubrosSheet[`B1`] = { v: 'Concepto' };
          rubrosSheet[`C1`] = { v: 'Valor Interno' };
          rubrosSheet[`D1`] = { v: 'Valor Externo' };
          rubrosSheet[`E1`] = { v: 'ID Aliado' };
          rubrosSheet[`F1`] = { v: 'Valor Total' };
          rubrosSheet['!ref'] = 'A1:Z100';

          let rubroRow = 2;
          productos.forEach(producto => {
            producto.rubros.forEach(rubro => {
              rubrosSheet[`A${rubroRow}`] = { v: rubro.idRubro };
              rubrosSheet[`B${rubroRow}`] = { v: rubro.concepto };
              rubrosSheet[`C${rubroRow}`] = { v: rubro.valorInterno };
              rubrosSheet[`D${rubroRow}`] = { v: rubro.valorExterno };
              rubrosSheet[`E${rubroRow}`] = { v: rubro.idAliado };
              rubrosSheet[`F${rubroRow}`] = { v: rubro.valorTotal };
              rubroRow++;
            });
          });

          const updatedBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
          });
          return of(new Blob([updatedBuffer]));
        }),
        map(blob => {
          saveAs(blob, 'productos.xlsx');
        }),
        catchError(err => {
          console.error('Error al generar el Excel:', err);
          return of(undefined);
        }),
      );
  }
}
