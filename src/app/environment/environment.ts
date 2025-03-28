const hostUrl = 'http://172.20.23.39:9200';
const hostUrlTest = 'http://172.20.23.39:9200';
export const environment = {
  production: true,
  useMocks: false,
  auth: {
    login: hostUrl + '/Autenticacion/Login',
    Logout: hostUrl + '/Autenticacion/Logout',
    sendEmail: hostUrl + '/Autenticacion/NotificarRestablecerPasswordAsync',
    changePassword: hostUrl + '/Autenticacion/CambiarContrasenaDesdeEmail',
  },
  planning: {
    getGuidelines:
      hostUrl +
      '/Proyectos/LineamientosEstrategicos/LineamientosEstrategicosPorMuseo',
    getStrategicPlan:
      hostUrl + '/Proyectos/PlanesEstrategicos/PlanesEstrategicosPorMuseo',
    createGuidelines:
      hostUrl +
      '/Proyectos/LineamientosEstrategicos/CrearMultiplesLineamientosEstrategicos/',
    editGuidelines: hostUrl + '/Proyectos/LineamientosEstrategicos/Editar/',
    deleteGuidelines: hostUrl + '/Proyectos/LineamientosEstrategicos/Eliminar/',
    getEvaluators: hostUrl + '/Proyectos/EjesEstrategicos/Evaluadores',
    getPolicians: hostUrl + '/Proyectos/Politicas/',
    createStrategicPlan: hostUrl + '/Proyectos/PlanesEstrategicos/Agregar',
    editStrategicPlan: hostUrl + '/Proyectos/PlanesEstrategicos/Editar',
    editEjeStrategic: hostUrl + '/Proyectos/EjesEstrategicos/Editar',
    deleteEjeStrategic: hostUrl + '/Proyectos/EjesEstrategicos/Eliminar/',
    getIndicators: hostUrl + '/Proyectos/Indicadores',
    getTypeIndicators: hostUrl + '/Proyectos/TiposIndicador',

    createTypeIndicators:
      hostUrl + '/Proyectos/Indicadores/CrearMultiplesIndicadores',
    editTypeIndicators: hostUrl + '/Proyectos/Indicadores/Editar',
    deleteTypeIndicators: hostUrl + '/Proyectos/Indicadores/Eliminar/',
    getUnidadesMedida: hostUrl + '/Configuracion/UnidadesDeMedida',
    getListaTiposIndicador:
      hostUrl + '/Proyectos/TiposIndicador/ListaTiposIndicador',
    getCategoriesIndicador: hostUrl + '/Proyectos/CategoriasIndicador',
  },
  authTest: {
    login: hostUrlTest + '/auth',
    sendEmail: hostUrlTest + '/Autenticacion/sendEmail/',
    changePassword: hostUrlTest + '/Autenticacion/sendEmail/',
  },
  projects: {
    createProduct: hostUrl + '/Proyectos/Proyectos/GuardarProducto',
    createProjects: hostUrl + '/Proyectos/Proyectos/GuardarProyecto',
    getProjects: hostUrlTest + '/Proyectos/Proyectos/ObtenerProyectosPorUsuarioYMuseo',
    getColaborationProjects: hostUrlTest + '/Proyectos/Proyectos/ObtenerProyectosEnColaboracion',
    getEvaluationProjects: hostUrlTest + '/Proyectos/Proyectos/ObtenerProyectosEvaluacion',
    getGeneralInformationProjects: hostUrlTest + '/Proyectos/EjesEstrategicos/ObtenerEjesEstrategicosVigentesPorMuseo',
    getStatesProjects: hostUrlTest + '/Proyectos/EstadosProyecto',
    getSeguimientos: hostUrlTest + '/Proyectos/Proyectos/ObtenerSeguimientos',
    saveSeguimientos: hostUrlTest + '/Proyectos/Proyectos/GuardarSeguimiento',
    getGrupoEtario: hostUrlTest + '/Proyectos/RangosEdad',
    getTipologias: hostUrlTest + '/Proyectos/TipologiasSostenibilidad',
    getAliado: hostUrlTest + '/Proyectos/Aliados',
    getRubro: hostUrlTest + '/Proyectos/Rubros',
    getTipoAporte: hostUrlTest + '/Proyectos/TiposAporte',
    getAreas: hostUrlTest + '/Configuracion/Areas/ObtenerAreasPorMuseo',
    getComunidades: hostUrlTest + '/Configuracion/Comunidades',
    getDepartamento: hostUrlTest + '/Configuracion/Departamentos',
    downloadReport: hostUrlTest + '/Proyectos/Proyectos/GenerarReporteProductos',
  },
  configuration: {
    timeOut: hostUrlTest + '/Configuracion/Configuracion/ObtenerTimeout',
  },
};
