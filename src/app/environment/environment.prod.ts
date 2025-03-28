const hostUrl = 'http://172.20.23.14:9200';
const hostUrlTest = 'http://172.20.23.14:9200';
export const environment = {
  production: true,
  auth: {
    login: hostUrl + '/Autenticacion/Login',
    Logout: hostUrl + '/Autenticacion/Logout',
    sendEmail: hostUrl + '/Autenticacion/sendEmail/',
    changePassword: hostUrl + '/Autenticacion/sendEmail/',
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
    getIndicators: hostUrl + '/Proyectos/Indicadores',
    getTypeIndicators: hostUrl + '/Proyectos/TiposIndicador',
    createTypeIndicators: hostUrl + '/Proyectos/TiposIndicador/Agregar/',
    editTypeIndicators: hostUrl + '/Proyectos/TiposIndicador/Editar/',
    deleteTypeIndicators: hostUrl + '/Proyectos/TiposIndicador/Eliminar/',
    getUnidadesMedida: hostUrl + '/Configuracion/UnidadesDeMedida',
    getListaTiposIndicador:
      hostUrl + '/Proyectos/TiposIndicador/ListaTiposIndicador',
  },
  authTest: {
    login: hostUrlTest + '/auth',
    sendEmail: hostUrlTest + '/Autenticacion/sendEmail/',
    changePassword: hostUrlTest + '/Autenticacion/sendEmail/',
  },
};
