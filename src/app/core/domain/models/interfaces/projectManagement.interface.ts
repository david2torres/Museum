// General Response Create Projects

export interface IProjectsComponent {
  tipoLista: string;
  proyectos: IProjects[];
}

export interface IProjects {
  id: string;
  habilitarSeguimiento: boolean;
  habilitarEvaluado: boolean;
  evaluado: boolean;
  nombreCreador?: string;
  habilitarEstado: boolean;
  numero: string;
  nombre: string;
  idMuseo: number;
  idAreaResponsable: string;
  idEstado: string;
  idEjeEstrategico: string;
  idAccion: string;
  fechaInicio: Date;
  fechaFin: Date;
  justificacion: string;
  descripcion: string;
  objetivoGeneral: string;
  idTipologiaSostenibilidad: string;
  emailUsuario: string;
  areaResponsable: AreaResponsable;
  estado: Estado;
  evaluador: Evaluador;
  lineamientosEstrategicos: string[];
  indicadores: string[];
  objetivosEspecificos: string[];
  areasApoyo: any[];
  comunidades: any[];
  aliados: any[];
  productos: IProducto[];
  presupuesto: ProyectoPresupuesto;
  seguimientos: ISeguimiento[];
  meses: IMes[];
}

export interface ISeguimientoResponse {
  area: string;
  seguimientos: ISeguimiento[];
  meses: IMes[];
}

export interface ISeguimiento {
  idProyecto: string;
  nombreProyecto?: string;
  mes: IMes;
  productos: IIndicador[];
  indicadores: IIndicador[];
  presupuesto: SeguimientoPresupuesto;
  observaciones: string;
}

export interface IMes {
  id: number;
  nombre: string;
}

export interface SeguimientoPresupuesto {
  totalAprovado: number;
  totalEjecutado: number;
  valorMensual: number;
}
export interface IIndicador {
  id: string;
  nombre: string;
  meta?: number;
  cantidad?: number;
  fechaInicio?: Date;
  fechaFin?: Date;
  avanceAcumulado: number;
  avanceCualitativo: string;
  avanceCuantitativo: number;
  linkEvidencia?: string;
}
export interface ProyectoPresupuesto {
  presupuestoTotal: number;
  presupuestoInterno: PresupuestoTerno;
  presupuestoExterno: PresupuestoTerno;
}

export interface IAliado {
  idAliado: string;
  idTipoAporte: string;
}
export interface AreaResponsable {
  id: string;
  idMuseo: number;
  nombre: string;
}
export interface IComunidad {
  idComunidad: string;
  gruposEtarios: string[];
  idDepartamento: number;
  municipios: number[];
}
export interface Estado {
  id: string;
  nombre: string;
  descripcion: string;
  proyectos?: Proyecto[];
}
export interface Proyecto {
  id: string;
  numero: string;
  nombre: string;
  justificacion: string;
  objetivoGeneral: string;
  idAreaResponsable: string;
  idMuseo: number;
  idResponsableRegistroAvance: string;
  idEstado: string;
  fechaInicio: string;
  fechaFin: string;
  idAccion: string;
  productos: any[];
  proyectoAreas: any[];
  objetivosEspecificos: any[];
  proyectoComunidades: any[];
  proyectoIndicadores: any[];
}
export interface Evaluador {
  id: string;
  nombre: string;
}
export interface IPresupuesto {
  presupuestoTotal: number;
  presupuestoInterno: PresupuestoTerno;
  presupuestoExterno: PresupuestoTerno;
}
export interface PresupuestoTerno {
  valorPresupuesto: number;
  items: Item[];
}
export interface Item {
  nombre: string;
  valor: number;
  codColor: string;
  porcentaje: number;
}

export interface ICreateProductsComponent {
  idProyecto: string;
  id?: string;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  cantidad: number;
  rubros: ICreateRubro[];
}

export interface ICreateRubro {
  idRubro: string;
  concepto: string;
  valorInterno: number;
  valorExterno: number;
  idAliado: string;
}
export interface IProducto {
  idProyecto: string;
  id: string;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  cantidad: number;
  rubros: IRubro[];
}

export interface IRubro {
  idRubro: string;
  concepto: string;
  valorInterno: string;
  valorExterno: string;
  idAliado: string;
  valorTotal: string;
}

export interface IModalNewProject {
  idEdit?: boolean;
  elementSelected?: any;
  idPlan?: string;
}
export interface IDynamicListPorjects {
  id: string;
  nombre: string;
  descripcion: null;
  lineamientosEstrategicos: IDynamicGuideline[];
  acciones: IDynamicAction[];
  evaluadores: null;
}
export interface IDynamicAction {
  id: string;
  nombre: string;
  descripcion: null;
  indicadores: IDynamicIndicator[];
}
export interface IDynamicIndicator {
  id: string;
  nombre: string;
  formula: null;
  meta: null;
  peso: null;
  tendencia: null;
  criterio: null;
  tipoIndicador: null;
  categoriaIndicador: null;
}
export interface IDynamicGuideline {
  id: string;
  nombre: string;
}

export interface IGenericList {
  id: string;
  nombre: string;
}

// Create Project
export interface ICreateProject {
  idEjeEstrategico: string;
  lineamientosEstrategicos: string[];
  idAccion: string;
  indicadores: string[];
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  justificacion: string;
  descripcion: string;
  objetivoGeneral: string;
  objetivosEspecificos: string[];
  areasApoyo: string[];
  idTipologiaSostenibilidad: string;
  comunidades: Comunidade[];
  aliados: Aliado[];
  productos: IProductoProject[];
}
export interface Aliado {
  idAliado: string;
  idTipoAporte: string;
}
export interface Comunidade {
  idComunidad: string;
  gruposEtarios: string[];
  idDepartamento: string[];
  municipios: string[];
}
export interface IProductoProject {
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  cantidad: number;
  rubros: Rubro[];
}
export interface Rubro {
  idRubro: string;
  concepto: string;
  valor: number;
  valorInterno: number;
  valorExterno: ValorExterno;
}
export interface ValorExterno {
  valor: number;
  idAliado: string;
}

// AREAS POR MUSEO
export interface IAreasPorMuseo {
  id: string;
  idMuseo: number;
  nombre: string;
}
// TIPOLOGIA
export interface ITipologias {
  id: string;
  nombre: string;
  proyectos: any[];
}
// Comunidades
export interface IComunidades {
  id: string;
  nombre: string;
  pcdCs: any[];
  pcdrEs: any[];
}
// Grupo Etario
export interface IGrupoEtario {
  id: string;
  nombre: string;
  orden: number;
  pcdrEs: any[];
}
// Departamento Municipio
export interface IDepartamentos {
  id: number;
  nombre: string;
  ciudades: ICiudadMunicipio[];
}
export interface ICiudadMunicipio {
  id: number;
  nombre: string;
}
// aliados
export interface IAliados {
  id: string;
  nombre: string;
  caracterizacion: string;
  localizacion: string;
}
//Tipo de Aporte
export interface ITipoAporte {
  id: string;
  nombre: string;
  proyectoAliados: any[];
}
// STATES Projects
export interface IEstadosProyectos {
  id: string;
  nombre: string;
  descripcion: string;
  proyectos: any[];
}

// Generated by https://quicktype.io
export interface ISaveSeguimiento {
  idProyecto: string;
  nombreProyecto: string;
  mes: Mes;
  productos: Indicadores[];
  indicadores: Indicadores[];
  presupuesto: Presupuesto;
  observaciones: string;
}

export interface Indicadores {
  id: string;
  nombre: string;
  meta?: number;
  avanceAcumulado: number;
  avanceCualitativo: string;
  avanceCuantitativo: number;
  linkEvidencia?: string;
}

export interface Mes {
  id: number;
  nombre: string;
}

export interface Presupuesto {
  totalAprovado: number;
  totalEjecutado: number;
  valorMensual: number;
}
