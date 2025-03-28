import {
  IEvaluadoresResponse,
  IGetGuidelinesResponse,
  IIndicadoresResponse,
  IPoliticasResponse,
  IStrategicPlansResponse,
  ITipoIndicador,
  ITypeIndicatorsRequest,
  IUnidadesMedida,
} from '@DomainInterfaces/planning.interface';
import {
  IAliados,
  IAreasPorMuseo,
  IComunidades,
  IDepartamentos,
  IDynamicListPorjects,
  IEstadosProyectos,
  IGenericList,
  IGrupoEtario,
  IProjectsComponent,
  ISeguimientoResponse,
  ITipoAporte,
  ITipologias,
} from '@DomainInterfaces/projectManagement.interface';
import { IUserLoginRespone } from '@DomainInterfaces/userAuth.interface';

export const simulatedResponse: IUserLoginRespone = {
  mensaje: 'Se autentica correctamente al usuario',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJqb3NlX211cmNpYUBtdXNlb25hY2lvbmFsLmdvdi5jbyIsIm5iZiI6MTcyMTI1NjYyOCwiZXhwIjoxNzIxMjYwMjI4LCJpYXQiOjE3MjEyNTY2Mjh9.mjjnX40cyiIZAAmQrAyMDUqfoKaPdrziGAGofWOLSe0',
  idSesion: '388e36b7-0ae6-48b9-a9c2-1a089ad4725b',
  nombreUsuario: 'José Alexander Murcia Salamanca',
  museos: [
    {
      id: 1,
      nombre: 'Museo Nacional de Colombia',
      roles: [
        {
          id: '1a40a173-52b6-4937-a607-899c73e0e3b0',
          nombre: 'Taquilla',
        },
      ],
      modulos: [
        {
          id: 1,
          ordenPresentacion: 1,
          nombre: 'Planeación',
          icono: 'planning',
          imagen: 'planning',
          ruta: 'planning',
          funcionalidades: [
            {
              id: 1,
              nombre: 'Estrategias de planeación',
              descripcion:
                'Descripción de funcionalidad Estrategias de planeación',
              icono: 'planificarEstrategia',
              ruta: 'dashBoard/management/planning/strategies', //TODO CHANGE NAME
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [
                {
                  'id': '34D6C7FF-E59F-45FE-8010-274BC925378E',
                  'nombre': 'Lineamientos Estratégicos',
                  'descripcion':
                    'Descripción de la pestaña Lineamientos Estratégicos',
                  'crear': true,
                  'leer': true,
                  'editar': true,
                  'borrar': false,
                },
                {
                  'id': '92A63A16-A73F-4D7A-A10A-4482C6E0D120',
                  'nombre': 'Planes Estratégicos',
                  'descripcion':
                    'Descripción de la pestaña Planes Estratégicos',
                  'crear': true,
                  'leer': true,
                  'editar': true,
                  'borrar': true,
                },
                {
                  'id': 'E4D163A0-0C9D-49F1-96F7-F53C09B71793',
                  'nombre': 'Indicadores',
                  'descripcion': 'Descripción de la pestaña Indicadores',
                  'crear': true,
                  'leer': true,
                  'editar': true,
                  'borrar': false,
                },
              ],
              // pestanas: []
            },
            {
              id: 2,
              nombre: 'Gestión de Proyectos',
              descripcion: 'Descripción de funcionalidad Gestión de Proyectos',
              icono: 'projectManagement',
              ruta: 'dashBoard/management/planning/manageProjects',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [
                {
                  id: '8A96AE75-26F1-474E-9C99-CF51699757E0',
                  nombre: 'Proyectos',
                  descripcion: 'Descripción de la pestaña Proyectos',
                  crear: true,
                  leer: true,
                  editar: true,
                  borrar: true,
                },
                {
                  id: '36D49DF7-9C5A-4261-9AFF-F3C5AC8C7337',
                  nombre: 'Proyectos en colaboración',
                  descripcion:
                    'Descripción de la pestaña Proyectos en colaboración',
                  crear: true,
                  leer: true,
                  editar: true,
                  borrar: true,
                },
                {
                  id: '35F0D0C3-7AF8-42C2-B214-9F0B0DC92A72',
                  nombre: 'Evaluación de Proyectos',
                  descripcion:
                    'Descripción de la pestaña Evaluación de Proyectos',
                  crear: true,
                  leer: true,
                  editar: true,
                  borrar: true,
                },
              ],
            },
            {
              id: 3,
              nombre: 'Panorama estratégico',
              descripcion: 'Descripción de funcionalidad Panorama estratégico',
              icono: 'informes',
              ruta: 'dashBoard/management/planning/reports',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 4,
              nombre: 'Descargar Reportes',
              descripcion: 'Descripción de funcionalidad Descargar Reportes',
              icono: 'reporte',
              ruta: 'dashBoard/management/planning/downloadReport',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
          ],
        },
        {
          id: 2,
          ordenPresentacion: 2,
          nombre: 'Servicios y Reservas',
          icono: 'Servicio',
          imagen: 'servicesAndReserves',
          ruta: 'servicesAndReserves',
          funcionalidades: [
            {
              id: 1,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 2,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 3,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
          ],
        },
        {
          id: 3,
          ordenPresentacion: 3,
          nombre: 'Gestion de Taquilla',
          icono: 'boleta',
          imagen: 'ticketOffice',
          ruta: 'ticketOffice',
          funcionalidades: [
            {
              id: 1,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 2,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 3,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
          ],
        },
        {
          id: 4,
          ordenPresentacion: 4,
          nombre: 'CRM',
          icono: 'inventario',
          imagen: 'crm',
          ruta: 'crm',
          funcionalidades: [
            {
              id: 1,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 2,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 3,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
          ],
        },
        {
          id: 5,
          ordenPresentacion: 5,
          nombre: 'Administracion',
          icono: 'admin',
          imagen: 'administration',
          ruta: 'administration',
          funcionalidades: [
            {
              id: 1,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 2,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
            {
              id: 3,
              nombre: 'Servicios/Personas',
              descripcion: 'Descripción de funcionalidad Servicios/Personas',
              icono: 'home',
              ruta: 'dashBoard/home',
              crear: true,
              leer: true,
              editar: true,
              borrar: true,
              pestanas: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nombre: 'Museo Nacional de Colombia Dos',
      roles: [
        {
          id: '1a40a173-52b6-4937-a607-899c73e0e3b0',
          nombre: 'Taquilla dos',
        },
      ],
      modulos: [],
    },
  ],
  area: {
    'id': 'FCAE81D4-033E-4ECA-886F-C03B6B6A0D4A',
    'nombre': 'Informática',
  },
  emailUsuario: 'usuaruio@asdas.com',
};

export const lineamientosResponseSimulate: IGetGuidelinesResponse[] = [
  {
    'id': '0a13291c-ff80-4b30-b82346d-218fd3774921',
    'nombre':
      'Lineamiento Estratégico 1 dsfg laksdjfh askldfjha sdklfja sdfkljhasd fklasjdhf alskdfhj asl aslkzxczxsz wdfjh askldfjha sdlfkjhas dflkhLineamiento Est',
    'activo': true,
    'politica': {
      'id': '1f00becd-c604-4c50-8943-134ef8c0066b',
      'nombre': 'Politica 1',
      'fechaInicio': new Date(),
      'fechaFin': new Date(),
      'cobertura': 'Internacional',
      'entidad': {
        'id': '1372d869-f331-4347-bb8f-2a1dcdf2014b',
        'nombre': 'ONU',
      },
    },
  },
  {
    'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
    'nombre': 'Lineamiento Estratégico 2',
    'activo': true,
    'politica': {
      'id': '1f00becd-c604-4c50-8943-134ef8c0066b',
      'nombre': 'Politica 1',
      'fechaInicio': new Date(),
      'fechaFin': new Date(),
      'cobertura': 'Internacional',
      'entidad': {
        'id': '1372d869-f331-4347-bb8f-2a1dcdf2014b',
        'nombre': 'ONU',
      },
    },
  },
  {
    'id': '0a1343291c-ff80-4b32340-b82346d-218fd3774921',
    'nombre': 'Lineamiento Estratégico 3',
    'activo': true,
    'politica': {
      'id': '1f00becd-c604-4c50-8943-134ef8c0066b',
      'nombre': 'Politica 1',
      'fechaInicio': new Date(),
      'fechaFin': new Date(),
      'cobertura': 'Internacional',
      'entidad': {
        'id': '1372d869-f331-4347-bb8f-2a1dcdf2014b',
        'nombre': 'ONU',
      },
    },
  },
  {
    'id': '0a1343291c-ff80-4b32340-b86d-218f23423d3774921',
    'nombre': 'Lineamiento Estratégico 01',
    'activo': false,
    'politica': {
      'id': '1f00becd-c604-4c50-8943-134ef8c0066b',
      'nombre': 'Politica 1',
      'fechaInicio': new Date(),
      'fechaFin': new Date(),
      'cobertura': 'Internacional',
      'entidad': {
        'id': '1372d869-f331-4347-bb8f-2a1dcdf2014b',
        'nombre': 'ONU',
      },
    },
  },
  {
    'id': '0a1343291c-ff80-4b32340-b23486d-218fd3774921',
    'nombre': 'Lineamiento Estratégico 03',
    'activo': false,
    'politica': {
      'id': '1f00becd-c604-4c50-8943-134ef8c0066b',
      'nombre': 'Politica 1',
      'fechaInicio': new Date(),
      'fechaFin': new Date(),
      'cobertura': 'Internacional',
      'entidad': {
        'id': '1372d869-f331-4347-bb8f-2a1dcdf2014b',
        'nombre': 'ONU',
      },
    },
  },
];

export const evaluatorResponseSimulate: IEvaluadoresResponse[] = [
  {
    'id': '12334df-993f-4e0d-ba2e-ed397d17b99b',
    'nombre': 'José Alexander Murcia Salamanca',
  },
  {
    'id': '876ghjgh45-993f-4e0d-ba2e-ed397d17b99b',
    'nombre': 'José  Salamanca',
  },
  {
    'id': 'cvbfd-993f-4e0d-ba2e-ed397d17b99b',
    'nombre': 'Alexander Murcia ',
  },
];

export const politicasResponseSimulate: IPoliticasResponse[] = [
  {
    id: '1f00becd-c604-4c50-8943-134ef8c0066b',
    nombre: 'Politica 1',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    entidad: {
      id: '1372d869-f331-4347-bb8f-2a1dcdf2014b',
      nombre: 'ONU',
    },
    cobertura: 'Internacional',
  },
  {
    id: '1f00becd-c604-4c50-894233-134ef8c0066b',
    nombre: 'Politica 2',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    entidad: {
      id: '1372d869-f331-4347-bb8f-2a1dcdf2014b',
      nombre: 'ONU 2',
    },
    cobertura: 'Nacional',
  },
];

export const strategicPlansResponse: IStrategicPlansResponse[] = [
  {
    'id': '213-76d4-4113-b154-c31b465631c8d8b8',
    'fechaInicio': new Date('2030-02-01'),
    'fechaFin': new Date('2029-06-22'),
    'idMuseo': 1,
    'ejesEstrategicos': [
      {
        'id': '123-234-44d7-b047-d63e395345354a85bc',
        'nombre': 'Eje Estratégico 1 sin Acciones',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': '0a13291c-ff80-4b30-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '0a1343291c-ff80-4b32340-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'evaluadores': [
          {
            'id': '12334df-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'José Alexander Murcia Salamanca',
          },
          {
            'id': '876ghjgh45-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'José  Salamanca',
          },
          {
            'id': 'cvbfd-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'Alexander Murcia ',
          },
        ],
        'acciones': [],
      },
      {
        'id': '123-234-44d7-b047-d63e395a85bc',
        'nombre': 'Eje Estratégico 2',
        'descripcion': 'Descripción del Eje estratégico 2',
        'lineamientosEstrategicos': [
          {
            'id': '0a13291c-ff80-4b30-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '0a1343291c-ff80-4b32340-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'acciones': [
          {
            'id': '23442342345345',
            'nombre': 'Acción 1',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos quod numquam et voluptatem quibusdam aperiam pariatur perspiciatis, eaque quia excepturi! Reprehenderit cupiditate atque adipisci quisquam natus pariatur. Eaque, reprehenderit!',
            'indicadores': [
              {
                id: '10-d824a8d5-cb5e-461a-9a9e-d57cebee5299',
                'nombre': 'Indicador 1',
                'peso': 30,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 30,

                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
              {
                id: '12-d824a8d5-cb5e-461a-9a9e-d57cebee5299op',
                'nombre': 'Indicador 3',
                'peso': 40,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': '0abf59f2-ec0a-4d5b-813c-123',
            'nombre': 'Acción 2',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Invento',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 1',
                'peso': 100,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4195-bb6f-bfe94840e123614',
            'nombre': 'Acción 1',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos quod numquam et voluptatem quibusdam aperiam pariatur perspiciatis, eaque quia excepturi! Reprehenderit cupiditate atque adipisci quisquam natus pariatur. Eaque, reprehenderit!',
            'indicadores': [],
          },
        ],
      },
      {
        'id': '123-234-44d7-b047-d63e323495a85bc',
        'nombre': 'Eje Estratégico 1',
        'descripcion': 'Descripción del Eje estratégico 1.4',
        'lineamientosEstrategicos': [
          {
            'id': '123-536c-234-aa5f-b519a508sad350d',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '123-536c-49a0-aa5f-23asd4',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '123-536c-49a0-aa53f-b519a502318350d',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'acciones': [],
      },
      {
        'id': '123-234-44d7-b047-d63e395a85b423432c',
        'nombre': 'Eje Estratégico 2',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
        ],
        'acciones': [
          {
            'id': '',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 100,
                'tipoIndicador': {
                  'id': '324-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': '213-ec0a-4d5b-813c-123',
            'nombre': 'Acción 2',
            'descripcion': 'Descripción de la Acción 2',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 100,
                'tipoIndicador': {
                  'id': '23-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4123195-bb6f-bfe94840e123614',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [],
          },
        ],
      },
    ],
  },
  {
    'id': '213-76d4-4113-b154-c31b465631c8d8b8',
    'fechaInicio': new Date('2024-10-01'),
    'fechaFin': new Date('2024-12-30'),
    'idMuseo': 1,
    'ejesEstrategicos': [
      {
        'id': '123-234-44d7-b047-d63e395345354a85bc',
        'nombre': 'Eje Estratégico 1 sin Acciones',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': '0a13291c-ff80-4b30-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '0a1343291c-ff80-4b32340-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'evaluadores': [
          {
            'id': '12334df-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'José Alexander Murcia Salamanca',
          },
          {
            'id': '876ghjgh45-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'José  Salamanca',
          },
          {
            'id': 'cvbfd-993f-4e0d-ba2e-ed397d17b99b',
            'nombre': 'Alexander Murcia ',
          },
        ],
        'acciones': [],
      },
      {
        'id': '123-234-44d7-b047-d63e395a85bc',
        'nombre': 'Eje Estratégico 2',
        'descripcion': 'Descripción del Eje estratégico 2',
        'lineamientosEstrategicos': [
          {
            'id': '0a13291c-ff80-4b30-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '0a1343291c-ff80-4b32340-b82346d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'acciones': [
          {
            'id': '23442342345345',
            'nombre': 'Acción 1',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos quod numquam et voluptatem quibusdam aperiam pariatur perspiciatis, eaque quia excepturi! Reprehenderit cupiditate atque adipisci quisquam natus pariatur. Eaque, reprehenderit!',
            'indicadores': [
              {
                id: '10-d824a8d5-cb5e-461a-9a9e-d57cebee5299',
                'nombre': 'Indicador 1',
                'peso': 30,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 30,

                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
              {
                id: '12-d824a8d5-cb5e-461a-9a9e-d57cebee5299op',
                'nombre': 'Indicador 3',
                'peso': 40,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': '0abf59f2-ec0a-4d5b-813c-123',
            'nombre': 'Acción 2',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Invento',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 1',
                'peso': 100,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4195-bb6f-bfe94840e123614',
            'nombre': 'Acción 1',
            'descripcion':
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos quod numquam et voluptatem quibusdam aperiam pariatur perspiciatis, eaque quia excepturi! Reprehenderit cupiditate atque adipisci quisquam natus pariatur. Eaque, reprehenderit!',
            'indicadores': [],
          },
        ],
      },
      {
        'id': '123-234-44d7-b047-d63e323495a85bc',
        'nombre': 'Eje Estratégico 1',
        'descripcion': 'Descripción del Eje estratégico 1.4',
        'lineamientosEstrategicos': [
          {
            'id': '123-536c-234-aa5f-b519a508sad350d',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
          {
            'id': '123-536c-49a0-aa5f-23asd4',
            'nombre': 'Lineamiento Estratégico Editado 2',
          },
          {
            'id': '123-536c-49a0-aa53f-b519a502318350d',
            'nombre': 'Lineamiento Estratégico Editado 3',
          },
        ],
        'acciones': [],
      },
      {
        'id': '123-234-44d7-b047-d63e395a85b423432c',
        'nombre': 'Eje Estratégico 2',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': '0a13234291c-ff80-4b32340-b86d-218fd3774921',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
        ],
        'acciones': [
          {
            'id': '',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 100,
                'tipoIndicador': {
                  'id': '324-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': '213-ec0a-4d5b-813c-123',
            'nombre': 'Acción 2',
            'descripcion': 'Descripción de la Acción 2',
            'indicadores': [
              {
                id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
                'nombre': 'Indicador 2',
                'peso': 100,
                'tipoIndicador': {
                  'id': '23-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4123195-bb6f-bfe94840e123614',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [],
          },
        ],
      },
    ],
  },
  {
    'id': '8672f583-76d4-4113-b154-c31b31c8d8b8',
    'fechaInicio': new Date('2024-05-01'),
    'fechaFin': new Date('2024-08-31'),
    'idMuseo': 1,
    'ejesEstrategicos': [
      {
        'id': '55c44a61-10d8-44d7-b047-d63e395a85bc',
        'nombre': 'Eje Estratégico 1',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': 'd479c616-536c-49a0-aa5f-b519a508350d',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
        ],
        'acciones': [
          {
            'id': '0abf59fsd2-ec0a-4d5b-813c-0cdbce938681',
            'nombre': 'Acción 2',
            'descripcion': 'Descripción de la Acción 2',
            'indicadores': [
              {
                'id': 'd824a8d5-cb5e-461a-9a9e-d57cebee5299',
                'nombre': 'Indicador 1',
                'peso': 100,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4195-bb6f-bfe94840e614',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [],
          },
        ],
      },
    ],
  },
  {
    'id': '86qwe72f583-76d4-4113-b154-c31b31c8d8b8',
    'fechaInicio': new Date('2024-01-01'),
    'fechaFin': new Date('2024-03-28'),
    'idMuseo': 1,
    'ejesEstrategicos': [
      {
        'id': '55c44a61-10d8-44d7-b047-d63e395a85bc',
        'nombre': 'Eje Estratégico 1',
        'descripcion': 'Descripción del Eje estratégico 1',
        'lineamientosEstrategicos': [
          {
            'id': 'd479c616-536c-49a0-aa5f-b519a508350d',
            'nombre': 'Lineamiento Estratégico Editado 1',
          },
        ],
        'acciones': [
          {
            'id': '0abf59fsd2-ec0a-4d5b-813c-0cdbce938681',
            'nombre': 'Acción 2',
            'descripcion': 'Descripción de la Acción 2',
            'indicadores': [
              {
                'id': 'd824a8d5-cb5e-461a-9a9e-d57cebee5299',
                'nombre': 'Indicador 1',
                'peso': 100,
                'tipoIndicador': {
                  'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
                  'nombre': 'Cuantitativo',
                },
              },
            ],
          },
          {
            'id': 'c6a745a2-d88e-4195-bb6f-bfe94840e614',
            'nombre': 'Acción 1',
            'descripcion': 'Descripción de la Acción 1',
            'indicadores': [],
          },
        ],
      },
    ],
  },
];

export const indicatorsResponseSimulate: IIndicadoresResponse[] = [
  {
    id: '10-d824a8d5-cb5e-461a-9a9e-d57cebee5299',
    nombre: 'Indicador 1',
    formula: 'Fórmula del indicador 1',
    meta: 1, // Si este es el peso, cambiar el nombre de meta a peso
    tendencia: 'Creciente',
    peso: 0,
    criterio: 'Fijo',
    tipoIndicador: {
      id: 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
      nombre: 'Cuantitativo',
    },
  },
  {
    id: '11-d824a8d5-cb5e-461a-9a9e-d57cebee5299kl',
    nombre: 'Indicador 2',
    formula: 'Fórmula del indicador 2',
    meta: 2,
    peso: 0,
    tendencia: 'Creciente',
    criterio: 'Fijo',
    tipoIndicador: {
      // Tipo de clasificacion
      id: 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2bkl',
      nombre: 'Cuantitativo',
    },
  },
  {
    id: '12-d824a8d5-cb5e-461a-9a9e-d57cebee5299op',
    nombre: 'Indicador 3',
    formula: 'Fórmula del indicador 3',
    meta: 0,
    peso: 0,
    tendencia: 'Creciente',
    criterio: 'Fijo',
    tipoIndicador: {
      id: 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2bop',
      nombre: 'Cuantitativo',
    },
  },
];

export const indicatorRequestSimulate: ITypeIndicatorsRequest[] = [
  {
    'id': '9B559BDC-D8DA-4981-ACEB-F124147F8E9E',
    'nombre': 'Gestión',
    'indicadores': [
      {
        'id': 'd82324a8d5-cb5e-461a-9a9e-d57ce23bee5299',
        'idTipoIndicador': 'b23bc4ff0b-6c97-4aa5-8b7e-3a23447adf82a2b',
        'meta': 33,
        'nombre': 'Indicador 03',
        'formula': 'Fórmula del indicador 03',
        'idUnidadDeMedida': '10f3b12681-c3ca-4f6b-a0e0-cf33effc38wer81',
        'tendencia': 'Creciente',
        'criterio': 'Fijo',
        'proyectosAsociados': [],
      },
      {
        'id': 'd82123123324a8d5-cb5e-461a-9a9e-d57ce23bee5299',
        'idTipoIndicador': 'b21233bc4ff0b-6c97-4aa5-8b7e-3a23447adf82a2b',
        'meta': 378,
        'nombre': 'Indicador 0.3',
        'formula': 'Fórmula del indicador 0.3',
        'idUnidadDeMedida': '10f3123b12681-c3ca-4f6b-a0e0-cf33effc38wer81',
        'tendencia': 'Creciente',
        'criterio': 'Fijo',
        'proyectosAsociados': [
          {
            'numero': 'P001-2024',
            'nombre': 'Proyecto Prueba 1',
            'peso': 100,
            'idProyecto': 'FEE5C422-093B-47E1-96C3-D4E74C683BF0',
            'idIndicador': '45508DD2-F6BD-47A6-8C87-97AE94B51DC0',
          },
          {
            'numero': 'P002-2024',
            'nombre': 'Proyecto Prueba 2',
            'peso': 100,
            'idProyecto': 'FEE5C422-093B-47E1-96C3-D4E74C683BF0',
            'idIndicador': '45508DD2-F6BD-47A6-8C87-97AE94B51DC0',
          },
        ],
      },
    ],
  },
  {
    'id': 'B7BF326B-5C8B-400B-B2DC-EBD9A35434F7',
    'nombre': 'Resultado',
    'indicadores': [
      {
        'id': 'd82324a8d5-cb5e-461a-9a9e-d57cebee5299',
        'idTipoIndicador': 'b23bc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
        'meta': 34,
        'nombre': 'Indicador 01',
        'formula': 'Fórmula del indicador 01',
        'idUnidadDeMedida': '10f3b12681-c3ca-4f6b-a0e0-cf33effc3881',
        'tendencia': 'Creciente',
        'criterio': 'Fijo',
      },
    ],
  },
  {
    'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
    'nombre': 'Producto',
    'indicadores': [
      {
        'id': 'd824a8d5-cb5e-461a-9a9e-d57cebee5299',
        'idTipoIndicador': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
        'meta': 35,
        'nombre': 'Indicador 1',
        'formula': 'Fórmula del indicador 1',
        'idUnidadDeMedida': '10f3b681-c3ca-4f6b-a0e0-cf33effc3881',
        'tendencia': 'Creciente',
        'criterio': 'Fijo',
      },
    ],
  },
];

export const unidadesMedidasSimulate: IUnidadesMedida[] = [
  {
    id: 'b23bc4ff0b-6c97-4aa5-8b7e-3a23447adf82a2b',
    nombre: 'Unidad 1',
  },
  {
    id: '32445563234234',
    nombre: 'Unidad 2',
  },
  {
    id: '32123445563234234',
    nombre: 'Unidad 3',
  },
];

export const tipoIndicadorSimulate: ITipoIndicador[] = [
  {
    'id': '10f3b12681-c3ca-4f6b-a0e0-cf33effc38wer81',
    'nombre': 'Gestión',
  },
  {
    'id': 'B7BF326B-5C8B-400B-B2DC-EBD9A35434F7',
    'nombre': 'Resultado',
  },
  {
    'id': 'bbc4ff0b-6c97-4aa5-8b7e-3a47adf82a2b',
    'nombre': 'Producto',
  },
];

export const projectSimulate: IProjectsComponent[] = [
  {
    tipoLista: null,
    proyectos: [
      {
        "id": "ac7a85e8-4307-4d93-b9b7-1e8fcbc3f84e",
        "habilitarSeguimiento": true,
        "habilitarEstado": true,
        "habilitarEvaluado": true,
        "evaluado": true,
        "numero": "P004-2025",
        "nombre": "ASDASDASD",
        "idMuseo": 1,
        "idAreaResponsable": "FCAE81D4-033E-4ECA-886F-C03B6B6A0D4A",
        "idEstado": "5760f5d8-62e3-44ad-95e2-adeaf27216a7",
        "idEjeEstrategico": "7f3620a2-d29d-4b45-bb7e-abbcd7ab6b93",
        "idAccion": "a9981359-1261-4cfd-ad04-b4ecffea8937",
        "fechaInicio": new Date(),
        "fechaFin": new Date(),
        "justificacion": "",
        "descripcion": "",
        "objetivoGeneral": "",
        "idTipologiaSostenibilidad": null,
        "emailUsuario": "",
        "areaResponsable": {
            "id": "FCAE81D4-033E-4ECA-886F-C03B6B6A0D4A",
            "idMuseo": 1,
            "nombre": "Informática"
        },
        "estado": {
            "id": "5760f5d8-62e3-44ad-95e2-adeaf27216a7",
            "nombre": "Creado",
            "descripcion": "Este estado se habilita cuando el usuario inicia la creación del proyecto y lo guarda sin haber diligenciado todos los campos del formulario"
        },
        "evaluador": null,
        "lineamientosEstrategicos": [
            "069858AE-EBE8-44E2-8B9B-8D648D396836"
        ],
        "indicadores": [
            "6F4825D8-65F5-43B5-8E3F-569855831C6F"
        ],
        "objetivosEspecificos": [
            "",
            "",
            ""
        ],
        "areasApoyo": [],
        "comunidades": [],
        "aliados": [],
        "productos": [
            {
                "idProyecto": "ac7a85e8-4307-4d93-b9b7-1e8fcbc3f84e",
                "id": "87e4be3a-7a2e-4e43-835c-bac6945104bb",
                "nombre": "Estrategia de divulgación",
                "fechaInicio": new Date(),
                "fechaFin": new Date(),
                "cantidad": 1,
                "rubros": []
            },
            {
                "idProyecto": "ac7a85e8-4307-4d93-b9b7-1e8fcbc3f84e",
                "id": "993a4d8f-302c-45f8-ac34-5eff2137a132",
                "nombre": "Informe de cierre",
                "fechaInicio": new Date(),
                "fechaFin": new Date(),
                "cantidad": 1,
                "rubros": []
            }
        ],
        "presupuesto": {
            "presupuestoTotal": 0,
            "presupuestoInterno": {
                "valorPresupuesto": 0,
                "items": []
            },
            "presupuestoExterno": {
                "valorPresupuesto": 0,
                "items": []
            }
        },
        "seguimientos": [
            {
                "idProyecto": "",
                "mes": {
                    "id": 1,
                    "nombre": "Enero"
                },
                "productos": [
                    {
                        "id": "",
                        "nombre": "",
                        "avanceAcumulado": 30,
                        "avanceCualitativo": "",
                        "avanceCuantitativo": 50,
                        "linkEvidencia": ""
                    }
                ],
                "indicadores": [
                    {
                        "id": "",
                        "nombre": "",
                        "meta": 50,
                        "avanceAcumulado": 50,
                        "avanceCualitativo": "",
                        "avanceCuantitativo": 50
                    }
                ],
                "presupuesto": {
                    "totalAprovado": 5000,
                    "totalEjecutado": 5000,
                    "valorMensual": 5000
                },
                "observaciones": ""
            }
        ],
        "meses": [
            {
                "id": 1,
                "nombre": "Enero"
            }
        ]
    },
      {
        'id': '3B4F50E3-B655-4579-905C-2F7B876FA1C1',
        'numero': 'P003-1',
        "habilitarEvaluado": true,
        'nombre': 'Revisión y actualización del subproceso de Gestión de Museos',
        'idMuseo': 1,
        'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
        'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
        'idEjeEstrategico': '1',
        'areaResponsable': {
          'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
          'idMuseo': 1,
          'nombre': 'Curaduría de Etnografía',
        },
        'estado': {
          'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
          'nombre': 'No Aprobado',
          'descripcion': 'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
          'proyectos': [
            {
              'id': '',
              'numero': '',
              'nombre': '',
              'justificacion': '',
              'objetivoGeneral': '',
              'idAreaResponsable': '',
              'idMuseo': 0,
              'idResponsableRegistroAvance': '',
              'idEstado': '',
              'fechaInicio': 'undefined',
              'fechaFin': 'undefined',
              'idAccion': '',
              'productos': [],
              'proyectoAreas': [],
              'objetivosEspecificos': [],
              'proyectoComunidades': [],
              'proyectoIndicadores': [],
            },
          ],
        },
        'lineamientosEstrategicos': ['string'],
        'idAccion': 'string',
        'indicadores': ['string'],
        'fechaInicio': new Date(),
        'fechaFin': new Date(),
        'justificacion': 'Justificacion',
        'descripcion': 'Descripcion',
        'objetivoGeneral': 'Objetivo General',
        'objetivosEspecificos': [
          'Objetivo especifico 1',
          'Objetivo especifico 2',
        ],
        'idTipologiaSostenibilidad': '1',
        'areasApoyo': ['Area de Apoyo 1', 'Area de Apoyo 2'],
        'comunidades': [
          {
            'idComunidad': 'string',
            'gruposEtarios': ['string'],
            'idDepartamento': 0,
            'municipios': [0],
          },
        ],
        'aliados': [
          {
            'idAliado': '1',
            'idTipoAporte': '2',
          },
        ],
        'productos': [
          {
            'idProyecto': 'idProyecto',
            'id': 'id',
            'nombre': 'nombre',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 0,
            'rubros': [
              {
                'idRubro': 'string',
                'concepto': 'string',
                'valorInterno': 'string',
                'valorExterno': 'string',
                'idAliado': '',
                'valorTotal': '',
              },
            ],
          },
        ],
        'presupuesto': {
          'presupuestoTotal': 10000,
          'presupuestoInterno': {
            'valorPresupuesto': 4000,
            'items': [
              {
                'nombre': 'Informe de cierre',
                'valor': 0,
                'codColor': '#4B3C8C',
                'porcentaje': 0,
              },
              {
                'nombre': 'Producto de prueba 11',
                'valor': 4000,
                'codColor': '#6854BF',
                'porcentaje': 100,
              },
              {
                'nombre': 'Estrategia de divulgación',
                'valor': 0,
                'codColor': '#4E7CFF',
                'porcentaje': 0,
              },
            ],
          },
          'presupuestoExterno': {
            'valorPresupuesto': 6000,
            'items': [
              {
                'nombre': 'Revista Bacánika',
                'valor': 2000,
                'codColor': '#4B3C8C',
                'porcentaje': 33,
              },
              {
                'nombre': 'Unidad de Búsqueda de Personas dadas por Desaparecidas -UBPD-',
                'valor': 4000,
                'codColor': '#6854BF',
                'porcentaje': 66,
              },
            ],
          },
        },
        'evaluador': {
          'id': '',
          'nombre': '',
        },
        'emailUsuario': 'string',
        habilitarSeguimiento: true,
        evaluado: true,
        habilitarEstado: false,
        seguimientos: [],
        meses: []
      },
      {
        'id': '3REasas-B655-4579-905C-2F7B876FA1C1',
        'numero': 'P004-1',
        "habilitarEvaluado": true,
        'nombre': 'Revisión y actualización del subproceso de Gestión de Museos',
        'idMuseo': 1,
        'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
        'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
        'idEjeEstrategico': '45FFE711-71C3-4668-AAEE-FA4D92C451F1',
        'areaResponsable': {
          'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
          'idMuseo': 1,
          'nombre': 'Curaduría de Etnografía',
        },
        'estado': {
          'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
          'nombre': 'En Cierre',
          'descripcion': 'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
          'proyectos': [
            {
              'id': '',
              'numero': '',
              'nombre': '',
              'justificacion': '',
              'objetivoGeneral': '',
              'idAreaResponsable': '',
              'idMuseo': 0,
              'idResponsableRegistroAvance': '',
              'idEstado': '',
              'fechaInicio': 'undefined',
              'fechaFin': 'undefined',
              'idAccion': '',
              'productos': [],
              'proyectoAreas': [],
              'objetivosEspecificos': [],
              'proyectoComunidades': [],
              'proyectoIndicadores': [],
            },
          ],
        },
        'lineamientosEstrategicos': [
          '069858AE-EBE8-44E2-8B9B-8D648D396836',
          'DE15B826-4A6D-40DE-BD8E-5016E9F63A40',
        ],
        'idAccion': 'CC4719AE-C362-4992-8EEF-B89F508AD7AD',
        'indicadores': [
          'EEAD4E53-9853-4484-8104-ABB04CAC9055',
          '1129EA9A-D2E5-492D-96F5-8B88D5A994AA',
        ],
        'fechaInicio': new Date(),
        'fechaFin': new Date(),
        'justificacion': 'Justificacion',
        'descripcion': 'Descripcion',
        'objetivoGeneral': 'Objetivo General',
        'objetivosEspecificos': [
          'Objetivo especifico 1',
          'Objetivo especifico 2',
        ],
        'idTipologiaSostenibilidad': '3221',
        'areasApoyo': ['1', '2'],
        'comunidades': [
          {
            'idComunidad': '1234',
            'gruposEtarios': [
              '79ea1c0f-a401-46b3-b96f-15f9ec447546',
              '7e57b27a-b2b6-491e-bed4-8fc59258d8f2',
            ],
            'idDepartamento': 32,
            'municipios': [1119, 1120],
          },
          {
            'idComunidad': '1234',
            'gruposEtarios': [
              '79ea1c0f-a401-46b3-b96f-15f9ec447546',
              '7e57b27a-b2b6-491e-bed4-8fc59258d8f2',
            ],
            'idDepartamento': 33,
            'municipios': [1123, 1122],
          },
        ],
        'aliados': [
          {
            'idAliado': '11746460-744A-08BA-6514-38B004A64140',
            'idTipoAporte': '5309b81e-6a1a-415c-a4bc-a826bb915fec',
          },
          {
            'idAliado': 'E8B593E8-73FC-6976-24E0-1FCB9E3D5B87',
            'idTipoAporte': 'cfb0c128-8b7f-48b7-bbbc-6c04bc034293',
          },
          {
            'idAliado': '16D87027-112F-18DD-0B30-306305AA802D',
            'idTipoAporte': 'dc09efc1-fe69-46a3-999b-5695c0f843d0',
          },
        ],
        'productos': [
          {
            'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
            'id': '09fbd560-c1d0-4b36-a426-88497f51f057',
            'nombre': 'Informe de cierre',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 1,
            'rubros': [],
          },
          {
            'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
            'id': '725b7c0c-59a2-441a-a2c0-1fac76afd81a',
            'nombre': 'Estrategia de divulgación',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 1,
            'rubros': [],
          },
          {
            'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
            'id': '50f485cc-2984-48a2-b478-cca5ca3ee290',
            'nombre': 'Producto de prueba 11',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 2,
            'rubros': [
              {
                'idRubro': '0D4580CC-005E-4CC8-977F-D034DBCA90C5',
                'concepto': 'Concepto 11',
                'valorInterno': '1000',
                'valorExterno': '2000',
                'idAliado': '07274241-38F9-8EBC-9A66-A639D7501F7D',
                'valorTotal': '3000',
              },
              {
                'idRubro': '1551E3EE-DCC3-4EA7-B734-8F016D3257C8',
                'concepto': 'Concepto 12',
                'valorInterno': '3000',
                'valorExterno': '4000',
                'idAliado': '082A6D07-5470-92C3-7250-64CB2EF920C0',
                'valorTotal': '7000',
              },
            ],
          },
        ],
        'presupuesto': {
          'presupuestoTotal': 10000,
          'presupuestoInterno': {
            'valorPresupuesto': 4000,
            'items': [
              {
                'nombre': 'Informe de cierre',
                'valor': 0,
                'codColor': '#4B3C8C',
                'porcentaje': 30,
              },
              {
                'nombre': 'Producto de prueba 11',
                'valor': 4000,
                'codColor': '#882ad5',
                'porcentaje': 30,
              },
              {
                'nombre': 'Estrategia de divulgación',
                'valor': 0,
                'codColor': '#4E7CFF',
                'porcentaje': 10,
              },
            ],
          },
          'presupuestoExterno': {
            'valorPresupuesto': 6000,
            'items': [
              {
                'nombre': 'Revista Bacánika',
                'valor': 2000,
                'codColor': '#4B3C8C',
                'porcentaje': 33,
              },
              {
                'nombre': 'Unidad de Búsqueda de Personas dadas por Desaparecidas -UBPD-',
                'valor': 4000,
                'codColor': '#6854BF',
                'porcentaje': 66,
              },
            ],
          },
        },
        'evaluador': {
          'id': '',
          'nombre': '',
        },
        'emailUsuario': 'string',
        habilitarSeguimiento: false,
        evaluado: false,
        habilitarEstado: true,
        seguimientos: [{
          idProyecto: '',
          mes: undefined,
          productos: [],
          indicadores: [],
          presupuesto: undefined,
          observaciones: ''
        }],
        meses: []
      },
    ],
  },
];

export const returnCreateProject: any = {
  'id': '3REasas-B655-4579-905C-2F7B876FA1C1',
  'numero': 'P004-1',
  'nombre':
    'Revisión y actualización del subproceso de Gestión de Museos Modificado',
  'idMuseo': 1,
  'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
  'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
  'idEjeEstrategico': '45FFE711-71C3-4668-AAEE-FA4D92C451F1',
  'idAccion': 'CC4719AE-C362-4992-8EEF-B89F508AD7AD',
  'fechaInicio': new Date(),
  'fechaFin': new Date(),
  'justificacion': 'Justificacion',
  'descripcion': 'Descripcion actualizado',
  'objetivoGeneral': 'Objetivo General',
  'idTipologiaSostenibilidad': '3221',
  'emailUsuario': 'string',
  'areaResponsable': {
    'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
    'idMuseo': 1,
    'nombre': 'Curaduría de Etnografía',
  },
  'estado': {
    'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
    'nombre': 'No Aprobado',
    'descripcion':
      'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
    'proyectos': [
      {
        'id': '',
        'numero': '',
        'nombre': '',
        'justificacion': '',
        'objetivoGeneral': '',
        'idAreaResponsable': '',
        'idMuseo': 0,
        'idResponsableRegistroAvance': '',
        'idEstado': '',
        'fechaInicio': 'undefined',
        'fechaFin': 'undefined',
        'idAccion': '',
        'productos': [],
        'proyectoAreas': [],
        'objetivosEspecificos': [],
        'proyectoComunidades': [],
        'proyectoIndicadores': [],
      },
    ],
  },
  'evaluador': {
    'id': '',
    'nombre': '',
  },
  'lineamientosEstrategicos': [
    '069858AE-EBE8-44E2-8B9B-8D648D396836',
    'DE15B826-4A6D-40DE-BD8E-5016E9F63A40',
  ],
  'indicadores': [
    'EEAD4E53-9853-4484-8104-ABB04CAC9055',
    '1129EA9A-D2E5-492D-96F5-8B88D5A994AA',
  ],
  'objetivosEspecificos': ['Objetivo especifico 1', 'Objetivo especifico 2'],
  'areasApoyo': ['1', '2'],
  'comunidades': [
    {
      'idComunidad': '1234',
      'gruposEtarios': [
        '79ea1c0f-a401-46b3-b96f-15f9ec447546',
        '7e57b27a-b2b6-491e-bed4-8fc59258d8f2',
      ],
      'idDepartamento': 32,
      'municipios': [1119, 1120],
    },
    {
      'idComunidad': '1234',
      'gruposEtarios': [
        '79ea1c0f-a401-46b3-b96f-15f9ec447546',
        '7e57b27a-b2b6-491e-bed4-8fc59258d8f2',
      ],
      'idDepartamento': 33,
      'municipios': [1123, 1122],
    },
  ],
  'aliados': [
    {
      'idAliado': '11746460-744A-08BA-6514-38B004A64140',
      'idTipoAporte': '5309b81e-6a1a-415c-a4bc-a826bb915fec',
    },
    {
      'idAliado': 'E8B593E8-73FC-6976-24E0-1FCB9E3D5B87',
      'idTipoAporte': 'cfb0c128-8b7f-48b7-bbbc-6c04bc034293',
    },
    {
      'idAliado': '16D87027-112F-18DD-0B30-306305AA802D',
      'idTipoAporte': 'dc09efc1-fe69-46a3-999b-5695c0f843d0',
    },
  ],
  'productos': [
    {
      'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
      'id': '09fbd560-c1d0-4b36-a426-88497f51f057',
      'nombre': 'Informe de cierre',
      'fechaInicio': '2024-11-30T00:00:00',
      'fechaFin': '2024-12-30T00:00:00',
      'cantidad': 1,
      'rubros': [],
    },
    {
      'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
      'id': '725b7c0c-59a2-441a-a2c0-1fac76afd81a',
      'nombre': 'Estrategia de divulgación',
      'fechaInicio': '2024-01-02T00:00:00',
      'fechaFin': '2024-02-02T00:00:00',
      'cantidad': 1,
      'rubros': [],
    },
    {
      'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
      'id': '50f485cc-2984-48a2-b478-cca5ca3ee290',
      'nombre': 'Producto de prueba 11',
      'fechaInicio': '2024-01-02T00:00:00',
      'fechaFin': '2024-12-30T00:00:00',
      'cantidad': 2,
      'rubros': [
        {
          'idRubro': '0D4580CC-005E-4CC8-977F-D034DBCA90C5',
          'concepto': 'Concepto 11',
          'valorInterno': 1000,
          'valorExterno': 2000,
          'idAliado': '07274241-38F9-8EBC-9A66-A639D7501F7D',
          'valorTotal': 3000,
        },
        {
          'idRubro': '1551E3EE-DCC3-4EA7-B734-8F016D3257C8',
          'concepto': 'Concepto 12',
          'valorInterno': 3000,
          'valorExterno': 4000,
          'idAliado': '082A6D07-5470-92C3-7250-64CB2EF920C0',
          'valorTotal': 7000,
        },
      ],
    },
    {
      'idProyecto': '69e82ce2-db58-4d50-b7e7-2620b4b6d022',
      'id': '50f485cc-2984-48a2-b478-cca5ca3ee290',
      'nombre': 'Producto de prueba 12',
      'fechaInicio': '2024-01-02T00:00:00',
      'fechaFin': '2024-12-30T00:00:00',
      'cantidad': 2,
      'rubros': [
        {
          'idRubro': '0D4580CC-005E-4CC8-977F-D034DBCA90C5',
          'concepto': 'Concepto 11',
          'valorInterno': 1000,
          'valorExterno': 2000,
          'idAliado': '07274241-38F9-8EBC-9A66-A639D7501F7D',
          'valorTotal': 3000,
        },
        {
          'idRubro': '1551E3EE-DCC3-4EA7-B734-8F016D3257C8',
          'concepto': 'Concepto 12',
          'valorInterno': 3000,
          'valorExterno': 4000,
          'idAliado': '082A6D07-5470-92C3-7250-64CB2EF920C0',
          'valorTotal': 7000,
        },
      ],
    },
  ],
  'presupuesto': {
    'presupuestoTotal': 10000,
    'presupuestoInterno': {
      'valorPresupuesto': 4000,
      'items': [
        {
          'nombre': 'Informe de cierre',
          'valor': 0,
          'codColor': '#4B3C8C',
          'porcentaje': 0,
        },
        {
          'nombre': 'Producto de prueba 11',
          'valor': 4000,
          'codColor': '#6854BF',
          'porcentaje': 100,
        },
        {
          'nombre': 'Estrategia de divulgación',
          'valor': 0,
          'codColor': '#4E7CFF',
          'porcentaje': 0,
        },
      ],
    },
    'presupuestoExterno': {
      'valorPresupuesto': 6000,
      'items': [
        {
          'nombre': 'Revista Bacánika',
          'valor': 2000,
          'codColor': '#4B3C8C',
          'porcentaje': 33,
        },
        {
          'nombre':
            'Unidad de Búsqueda de Personas dadas por Desaparecidas -UBPD-',
          'valor': 4000,
          'codColor': '#6854BF',
          'porcentaje': 66,
        },
      ],
    },
  },
};

export const seguimientoProject: ISeguimientoResponse = {
  "seguimientos": [
    {
      "nombreProyecto": "Nombre de Proyecto",
      "idProyecto": "Id123445",
      "mes": {
        "id": 1,
        "nombre": "Enero"
      },
      "productos": [
        {
          "id": "1",
          "nombre": "Nombre Producto",
          "avanceAcumulado": 100,
          "avanceCualitativo": "Enero",
          "avanceCuantitativo": 50,
          "linkEvidencia": "",
          "cantidad": 1,
          "fechaInicio": new Date(),
          "fechaFin": new Date(),
        },
        {
          "id": "2",
          "nombre": "Nombre 2",
          "avanceAcumulado": 30,
          "avanceCualitativo": "Enero",
          "avanceCuantitativo": 50,
          "linkEvidencia": "",
          cantidad: 2,
          fechaInicio: new Date(),
          fechaFin: new Date(),
        }
      ],
      "indicadores": [
        {
          "id": "1",
          "nombre": "Indicador 1",
          "meta": 50,
          "avanceAcumulado": 50,
          "avanceCualitativo": "ENERO",
          "avanceCuantitativo": 50
        },
        {
          "id": "2",
          "nombre": "Indicador 2",
          "meta": 50,
          "avanceAcumulado": 50,
          "avanceCualitativo": "ENERO",
          "avanceCuantitativo": 50
        }
      ],
      "presupuesto": {
        "totalAprovado": 5000,
        "totalEjecutado": 5000,
        "valorMensual": 5000
      },
      "observaciones": ""
    },
    {
      "nombreProyecto": "Nombre de Proyecto Febrero",
      "idProyecto": "Id123445",
      "mes": {
        "id": 2,
        "nombre": "Febrero"
      },
      "productos": [
        {
          "id": "1",
          "nombre": "Nombre Producto F",
          "avanceAcumulado": 40,
          "avanceCualitativo": "FEBRERO",
          "avanceCuantitativo": 20,
          "linkEvidencia": "",
          "cantidad": 4,
          "fechaInicio": new Date(),
          "fechaFin": new Date(),
        },
        {
          "id": "2",
          "nombre": "Nombre 2 F",
          "avanceAcumulado": 40,
          "avanceCualitativo": "FEBRERO",
          "avanceCuantitativo": 700,
          "linkEvidencia": "",
          cantidad: 2,
          fechaInicio: new Date(),
          fechaFin: new Date(),
        }
      ],
      "indicadores": [
        {
          "id": "1",
          "nombre": "Indicador 1 F",
          "meta": 40,
          "avanceAcumulado": 40,
          "avanceCualitativo": "FEBERERO",
          "avanceCuantitativo": 40
        },
        {
          "id": "2",
          "nombre": "Indicador 2 F",
          "meta": 40,
          "avanceAcumulado": 40,
          "avanceCualitativo": "FEBRERO",
          "avanceCuantitativo": 40
        }
      ],
      "presupuesto": {
        "totalAprovado": 8000,
        "totalEjecutado": 8000,
        "valorMensual": 8000
      },
      "observaciones": "FEBRERO"
    }
  ],
  "meses": [
    {
      "id": 1,
      "nombre": "Enero"
    },
    {
      "id": 2,
      "nombre": "Febrero"
    },
    {
      "id": 3,
      "nombre": "Marzo"
    }
  ],
  area: 'Nueva Area de Prueba'
}

export const colaborationProjectSimulate: IProjectsComponent[] = [
  {
    tipoLista: null,
    proyectos: [
      {
        'id': '3B4F50E3-B655-4579-905C-2F7B876FA1C1',
        'numero': 'P003-1',
        "habilitarEvaluado": true,
        'nombre': 'Revisión y actualización del subproceso de Gestión de Museos',
        'idMuseo': 1,
        'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
        'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
        'idEjeEstrategico': '1',
        'areaResponsable': {
          'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
          'idMuseo': 1,
          'nombre': 'Curaduría de Etnografía',
        },
        'estado': {
          'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
          'nombre': 'No Aprobado',
          'descripcion': 'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
          'proyectos': [
            {
              'id': '',
              'numero': '',
              'nombre': '',
              'justificacion': '',
              'objetivoGeneral': '',
              'idAreaResponsable': '',
              'idMuseo': 0,
              'idResponsableRegistroAvance': '',
              'idEstado': '',
              'fechaInicio': 'undefined',
              'fechaFin': 'undefined',
              'idAccion': '',
              'productos': [],
              'proyectoAreas': [],
              'objetivosEspecificos': [],
              'proyectoComunidades': [],
              'proyectoIndicadores': [],
            },
          ],
        },
        'lineamientosEstrategicos': ['string'],
        'idAccion': 'string',
        'indicadores': ['string'],
        'fechaInicio': new Date(),
        'fechaFin': new Date(),
        'justificacion': 'Justificacion',
        'descripcion': 'Descripcion',
        'objetivoGeneral': 'Objetivo General',
        'objetivosEspecificos': [
          'Objetivo especifico 1',
          'Objetivo especifico 2',
        ],
        'idTipologiaSostenibilidad': '1',
        'areasApoyo': ['Area de Apoyo 1', 'Area de Apoyo 2'],
        'comunidades': [
          {
            'idComunidad': 'string',
            'gruposEtarios': ['string'],
            'idDepartamento': 0,
            'municipios': [0],
          },
        ],
        'aliados': [
          {
            'idAliado': '1',
            'idTipoAporte': '2',
          },
        ],
        'productos': [
          {
            'idProyecto': 'idProyecto',
            'id': 'id',
            'nombre': 'nombre',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 0,
            'rubros': [
              {
                'idRubro': 'string',
                'concepto': 'string',
                'valorInterno': 'string',
                'valorExterno': 'string',
                'idAliado': '',
                'valorTotal': '',
              },
            ],
          },
        ],
        'presupuesto': {
          'presupuestoTotal': 1233,
          'presupuestoInterno': {
            'valorPresupuesto': 4567,
            'items': [
              {
                'nombre': 'string',
                'valor': 234,
                'codColor': '#FECE07',
                'porcentaje': 234523,
              },
            ],
          },
          'presupuestoExterno': {
            'valorPresupuesto': 2312,
            'items': [
              {
                'nombre': 'string',
                'valor': 234,
                'codColor': '#FE2307',
                'porcentaje': 3454353,
              },
            ],
          },
        },
        'evaluador': {
          'id': '',
          'nombre': '',
        },
        'emailUsuario': 'string',
        habilitarSeguimiento: false,
        evaluado: false,
        habilitarEstado: false,
        seguimientos: [],
        meses: []
      },
    ],
  },
];

export const evaluationProjectSimulate: IProjectsComponent[] = [
  {
    tipoLista: 'Pendientes por evaluar',
    proyectos: [
      {
        'id': '3B4F50E3-B655-4579-905C-2F7B876FA1C1',
        'numero': 'P003-1',
        'nombre': 'Seguimiento Revisión y actualización del subproceso de Gestión de Museos',
        'idMuseo': 1,
        'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
        'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
        'idEjeEstrategico': '1',
        'areaResponsable': {
          'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
          'idMuseo': 1,
          'nombre': 'Curaduría de Etnografía',
        },
        'estado': {
          'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
          'nombre': 'No Aprobado',
          'descripcion': 'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
          'proyectos': [
            {
              'id': '',
              'numero': '',
              'nombre': '',
              'justificacion': '',
              'objetivoGeneral': '',
              'idAreaResponsable': '',
              'idMuseo': 0,
              'idResponsableRegistroAvance': '',
              'idEstado': '',
              'fechaInicio': 'undefined',
              'fechaFin': 'undefined',
              'idAccion': '',
              'productos': [],
              'proyectoAreas': [],
              'objetivosEspecificos': [],
              'proyectoComunidades': [],
              'proyectoIndicadores': [],
            },
          ],
        },
        'lineamientosEstrategicos': ['string'],
        'idAccion': 'string',
        'indicadores': ['string'],
        'fechaInicio': new Date(),
        'fechaFin': new Date(),
        'justificacion': 'Justificacion',
        'descripcion': 'Descripcion',
        'objetivoGeneral': 'Objetivo General',
        'objetivosEspecificos': [
          'Objetivo especifico 1',
          'Objetivo especifico 2',
        ],
        'idTipologiaSostenibilidad': '1',
        'areasApoyo': ['Area de Apoyo 1', 'Area de Apoyo 2'],
        'comunidades': [
          {
            'idComunidad': 'string',
            'gruposEtarios': ['string'],
            'idDepartamento': 0,
            'municipios': [0],
          },
        ],
        'aliados': [
          {
            'idAliado': '1',
            'idTipoAporte': '2',
          },
        ],
        'productos': [
          {
            'idProyecto': 'idProyecto',
            'id': 'id',
            'nombre': 'nombre',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 0,
            'rubros': [
              {
                'idRubro': 'string',
                'concepto': 'string',
                'valorInterno': 'string',
                'valorExterno': 'string',
                'idAliado': '',
                'valorTotal': '',
              },
            ],
          },
        ],
        'presupuesto': {
          'presupuestoTotal': 1233,
          'presupuestoInterno': {
            'valorPresupuesto': 4567,
            'items': [
              {
                'nombre': 'string',
                'valor': 123123,
                'codColor': '#FECE07',
                'porcentaje': 234523,
              },
            ],
          },
          'presupuestoExterno': {
            'valorPresupuesto': 2312,
            'items': [
              {
                'nombre': 'string',
                'valor': 123123,
                'codColor': '#FE2307',
                'porcentaje': 3454353,
              },
            ],
          },
        },
        'evaluador': {
          'id': '',
          'nombre': '',
        },
        'emailUsuario': 'string',
        habilitarSeguimiento: true,
        evaluado: true,
        habilitarEstado: true,
        seguimientos: [
          {
            "idProyecto": "",
            "mes": {
              "id": 1,
              "nombre": "Enero"
            },
            "productos": [
              {
                "id": "69e82ce2-db58-4d50-b7e7-2620b4b6d022",
                "nombre": "Informe de cierre",
                "avanceAcumulado": 30,
                "avanceCualitativo": "",
                "avanceCuantitativo": 50,
                "linkEvidencia": ""
              }
            ],
            "indicadores": [
              {
                "id": "10-d824a8d5-cb5e-461a-9a9e-d57cebee5299",
                "nombre": "Indicador 1",
                "meta": 50,
                "avanceAcumulado": 50,
                "avanceCualitativo": "",
                "avanceCuantitativo": 50
              }
            ],
            "presupuesto": {
              "totalAprovado": 5000,
              "totalEjecutado": 5000,
              "valorMensual": 5000
            },
            "observaciones": ""
          }
        ],
        meses: [
          {
            "id": 1,
            "nombre": "Enero"
          },
          {
            "id": 2,
            "nombre": "Febrero"
          },
          {
            "id": 1,
            "nombre": "Marzo"
          }
        ],
        habilitarEvaluado: false
      },
    ],
  },
  {
    tipoLista: 'Evaluados',
    proyectos: [
      {
        'id': '3B4F50E3-B655-4579-905C-2F7B876FA1C1',
        'numero': 'P003-1',
        'nombre': 'Revisión y actualización del subproceso de Gestión de Museos',
        'idMuseo': 1,
        'idAreaResponsable': '04D05711-B500-4687-B682-7E24DA7E95C9',
        'idEstado': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
        'idEjeEstrategico': '1',
        'areaResponsable': {
          'id': '04D05711-B500-4687-B682-7E24DA7E95C9',
          'idMuseo': 1,
          'nombre': 'Curaduría de Etnografía',
        },
        'estado': {
          'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
          'nombre': 'No Aprobado',
          'descripcion': 'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
          'proyectos': [
            {
              'id': '',
              'numero': '',
              'nombre': '',
              'justificacion': '',
              'objetivoGeneral': '',
              'idAreaResponsable': '',
              'idMuseo': 0,
              'idResponsableRegistroAvance': '',
              'idEstado': '',
              'fechaInicio': 'undefined',
              'fechaFin': 'undefined',
              'idAccion': '',
              'productos': [],
              'proyectoAreas': [],
              'objetivosEspecificos': [],
              'proyectoComunidades': [],
              'proyectoIndicadores': [],
            },
          ],
        },
        'lineamientosEstrategicos': ['string'],
        'idAccion': 'string',
        'indicadores': ['string'],
        'fechaInicio': new Date(),
        'fechaFin': new Date(),
        'justificacion': 'Justificacion',
        'descripcion': 'Descripcion',
        'objetivoGeneral': 'Objetivo General',
        'objetivosEspecificos': [
          'Objetivo especifico 1',
          'Objetivo especifico 2',
        ],
        'idTipologiaSostenibilidad': '1',
        'areasApoyo': ['Area de Apoyo 1', 'Area de Apoyo 2'],
        'comunidades': [
          {
            'idComunidad': 'string',
            'gruposEtarios': ['string'],
            'idDepartamento': 0,
            'municipios': [0],
          },
        ],
        'aliados': [
          {
            'idAliado': '1',
            'idTipoAporte': '2',
          },
        ],
        'productos': [
          {
            'idProyecto': 'idProyecto',
            'id': 'id',
            'nombre': 'nombre',
            'fechaInicio': new Date(),
            'fechaFin': new Date(),
            'cantidad': 0,
            'rubros': [
              {
                'idRubro': 'string',
                'concepto': 'string',
                'valorInterno': 'string',
                'valorExterno': 'string',
                'idAliado': '',
                'valorTotal': '',
              },
            ],
          },
        ],
        'presupuesto': {
          'presupuestoTotal': 1233,
          'presupuestoInterno': {
            'valorPresupuesto': 4567,
            'items': [
              {
                'nombre': 'string',
                'valor': 123123,
                'codColor': '#FECE07',
                'porcentaje': 234523,
              },
            ],
          },
          'presupuestoExterno': {
            'valorPresupuesto': 2312,
            'items': [
              {
                'nombre': 'string',
                'valor': 123123,
                'codColor': '#FE2307',
                'porcentaje': 3454353,
              },
            ],
          },
        },
        'evaluador': {
          'id': '',
          'nombre': '',
        },
        'emailUsuario': 'string',
        habilitarSeguimiento: false,
        evaluado: false,
        habilitarEstado: false,
        seguimientos: [],
        meses: [],
        habilitarEvaluado: false
      },
    ],
  },
];

export const generalDynamicListForm: IDynamicListPorjects[] = [
  {
    'id': '45FFE711-71C3-4668-AAEE-FA4D92C451F1',
    'nombre': 'Agenciamiento Museo Nacional de Colombia',
    'descripcion': null,
    'lineamientosEstrategicos': [
      {
        'id': '069858AE-EBE8-44E2-8B9B-8D648D396836',
        'nombre': 'Cultura de Paz',
      },
      {
        'id': 'DE15B826-4A6D-40DE-BD8E-5016E9F63A40',

        'nombre': 'Espacios Culturales',
      },
      {
        'id': '4A05D5C4-38FB-4735-8911-AAB3E757D7FD',

        'nombre': 'Formación Artística y Cultural',
      },
      {
        'id': '86172E81-8A6F-4690-9D88-92D62B5CB0D6',

        'nombre': 'Gobernanza Cultural',
      },
    ],

    'acciones': [
      {
        'id': 'ABA1F5EA-B291-4A83-8AA3-A2D16E72853D',
        'nombre':
          'Diseño y gestión de exposiciones itinerantes de los Museos del Ministerio de las Culturas',
        'descripcion': null,
        'indicadores': [
          {
            'id': '846C6823-A440-4629-A281-63676D0F943C',

            'nombre':
              'Beneficiarios de la circulación de exposiciones itinerantes del Museo Nacional',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },

          {
            'id': '89C641E0-8811-4450-BF66-EA466AA69CA4',

            'nombre':
              'Beneficiarios de las exposiciones itinerantes realizadas con las comunidades.',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },

          {
            'id': '6EA05AD3-E7B7-4141-86CC-2592FDD38569',

            'nombre':
              'Circulación de Exposiciones itinerantes del Museo Nacional',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },

          {
            'id': 'CB84E133-8441-4B30-8973-1C63027C3D3B',

            'nombre':
              'Exposiciones itinerantes realizadas con las comunidades.',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': 'CC4719AE-C362-4992-8EEF-B89F508AD7AD',

        'nombre':
          'Diseño y gestión de exposiciones temporales y programación Cultural de los Museos del Ministerio de las Culturas',

        'descripcion': null,
        'indicadores': [
          {
            'id': 'EEAD4E53-9853-4484-8104-ABB04CAC9055',

            'nombre':
              'Actividades culturales y académicas realizadas en los Museos del Ministerio de las Culturas',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
          {
            'id': '1129EA9A-D2E5-492D-96F5-8B88D5A994AA',

            'nombre': 'Beneficiarios de las exposiciones temporales',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
          {
            'id': 'EEA17CC1-1159-403E-A397-367505498D48',

            'nombre':
              'Exposiciones temporales realizadas en los Museos del Ministerio de Cultura',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
          {
            'id': '0BB2BF61-8A2A-4D19-94E6-E35CD9C02214',

            'nombre': 'Guiones diseñados / implementados',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': 'DCEE018A-CFF9-420B-BE42-569B638C9F09',

        'nombre':
          'Fortalecimiento del Centro de Documentación del Museo Nacional de Colombia',

        'descripcion': null,

        'indicadores': [],
      },
      {
        'id': 'C96EE3BF-7463-44F4-8BBF-F8D6C5F4A77E',

        'nombre':
          'Gestión de exposiciones permanentes de los Museos del Ministerio de las Culturas',

        'descripcion': null,

        'indicadores': [
          {
            'id': 'EEA17CC1-1159-403E-A397-367505498D48',

            'nombre':
              'Exposiciones temporales realizadas en los Museos del Ministerio de Cultura',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': 'D36CDDB7-27A3-4894-B012-DB57D818BE53',

        'nombre': 'Gestión de la programación educativa de los Museos',

        'descripcion': null,

        'indicadores': [
          {
            'id': 'FF3C9131-2D97-4CB3-8A89-B95547F809B3',

            'nombre': 'Beneficiarios de la programación educativa',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },

          {
            'id': '8DAF86FB-9AC3-4BA3-A5F5-28BF4035A689',

            'nombre':
              'Procesos de formación artística y cultural realizados en los Museos del Ministerio de las Culturas',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },

          {
            'id': '0237E56A-2F55-4567-945B-845AED2316B3',

            'nombre': 'Servicios educativos ofertados',

            'formula': null,

            'meta': null,

            'peso': null,

            'tendencia': null,

            'criterio': null,

            'tipoIndicador': null,

            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '9B7C145A-C263-430E-93D0-C507F6CFEBAF',
        'nombre': 'Infraestructura, compras, fortalecimiento de espacios MNC.',
        'descripcion': null,
        'indicadores': [
          {
            'id': '756C5609-5C50-45F2-9E7F-38AB2C8C4EDA',
            'nombre':
              'Espacios físicos adecuados y/o mantenidos para el desarrollo de las funciones museológicas',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '76E0C06A-0A7E-4EAE-AA38-8A6B8C32C754',
        'nombre':
          'Producción del guion museológico y guion museográfico del proyecto de cocreación museológica del Museo Afro que promueve y apoya el reconocimiento de la cultura, las artes, los saberes y las reivindicaciones sociales de la población Afro en Colombia.',
        'descripcion': null,
        'indicadores': [
          {
            'id': '45508DD2-F6BD-47A6-8C87-97AE94B51DC0',
            'nombre':
              'Actividades de cocreación y académicas conceptualizadas / implementadas.',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
          {
            'id': '451457D4-E5D4-4AB4-9233-4A7ED4D40363',
            'nombre':
              'Personas beneficiarias de las actividades implementadas.',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '8BB112E9-D3DF-4442-8EB5-8F8DA796612E',
        'nombre': 'Puesta en marcha del Observatorio del MNC',
        'descripcion': null,
        'indicadores': [],
      },
    ],
    'evaluadores': null,
  },

  {
    'id': 'AB4F7B43-56C0-487F-B8B7-B5A7C10EB503',
    'nombre': 'Rediseño del Programa Fortalecimiento de Museos',
    'descripcion': null,
    'lineamientosEstrategicos': [
      {
        'id': 'B0ED4B64-3370-4F91-8974-EB75CD3AE99C',
        'nombre': 'Gobernanza',
      },
    ],
    'acciones': [
      {
        'id': '04697A2D-9EA4-4B79-B7DA-F39027233BF1',
        'nombre':
          'Conceptualización del Registro de Colecciones Artísticas e Históricas',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': 'D05A5B20-5A78-4E25-AB33-63BBFB817412',
        'nombre':
          'Conceptualización y puesta en marcha del Consultorio Nacional de Museos',
        'descripcion': null,
        'indicadores': [
          {
            'id': '8E48883E-65A4-4E4E-8247-AB80AE8D8F76',
            'nombre':
              'Número de museos y espacios museales beneficiados por asesorías.',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '571DD8AA-BA74-476C-B789-2224F502B336',
        'nombre':
          'Conceptualización y puesta en marcha del escalamiento de Colecciones Colombianas',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': 'D9144138-6479-4FE3-81C1-5BBD2C072E04',
        'nombre':
          'Conceptualización y puesta en marcha del Observatorio Nacional  de Museos',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': '35326891-DBE3-4EB0-B75E-51E234FAC287',
        'nombre':
          'Conceptualización y puesta en marcha del Sistema de Información Museológica (escalamiento base de datos SIMCO)',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': '5FFFF309-9887-401E-9485-CC9F69D4A612',
        'nombre': 'Desarrollo de la Política Cultural de Museos',
        'descripcion': null,
        'indicadores': [],
      },
    ],
    'evaluadores': null,
  },
  {
    'id': '52F6BBBD-06CD-41E7-B688-5EBE0AAFC86F',
    'nombre': 'Territorialización del Museo Nacional de Colombia',
    'descripcion': null,
    'lineamientosEstrategicos': [
      {
        'id': '069858AE-EBE8-44E2-8B9B-8D648D396836',
        'nombre': 'Cultura de Paz',
      },
      {
        'id': 'C3B945CF-84EE-479B-96C9-1AAB86819225',
        'nombre': 'Economía Popular',
      },
      {
        'id': 'B0ED4B64-3370-4F91-8974-EB75CD3AE99C',
        'nombre': 'Gobernanza',
      },
    ],
    'acciones': [
      {
        'id': 'A5CD721D-EA34-4544-ADD5-B9F459CE1291',
        'nombre':
          'Conceptualización e implementación de los modelos de negocio para las tiendas de las sedes del Museo Nacional que vincule a productores de economías populares.',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': '86BA147B-B913-4278-B0D5-593EBCFD5C93',
        'nombre': 'Conceptualización Plan Museológico',
        'descripcion': null,
        'indicadores': [],
      },
      {
        'id': '9F660D43-D084-4C68-94E4-E936825FED4A',
        'nombre':
          'Conceptualización y puesta en marcha de la Solución Integral de Gestión de Museos',
        'descripcion': null,
        'indicadores': [
          {
            'id': '364DACEB-7999-4A17-A952-5D00BAF53FEF',
            'nombre': 'Módulos conceptualizados y/o implementados',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '27E29BC6-8BA6-42F2-975F-8BD12C52C9EF',
        'nombre':
          'Conceptualización y puesta en marcha de lineamientos, manuales y políticas de investigación del MNC',
        'descripcion': null,
        'indicadores': [
          {
            'id': '6635F82F-1DAA-4F86-A947-955CB6725DCD',
            'nombre':
              'Manuales, políticas o documentos de las áreas del MNC actualizados y/o implementados.',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': 'A5A33E65-D938-4F97-8296-07D34F4AE124',
        'nombre': 'Desarrollo de proyectos de investigación',
        'descripcion': null,
        'indicadores': [
          {
            'id': '756C5609-5C50-45F2-9E7F-38AB2C8C4EDA',
            'nombre':
              'Espacios físicos adecuados y/o mantenidos para el desarrollo de las funciones museológicas',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
          {
            'id': 'D292E531-B247-403B-A06D-9B9209705DA9',
            'nombre': 'Productos de investigación en curso y,o implementados',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': 'A1AC7710-F5E7-4565-8D4F-A450ED582F2C',
        'nombre': 'Diseño y puesta en marcha del área digital MNC',
        'descripcion': null,
        'indicadores': [
          {
            'id': '03ABC347-D423-4CF7-819D-3ED3CD1A69D5',
            'nombre':
              'Beneficiarios por proyectos transmedia y digitales implementados.',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
          {
            'id': '81D474C5-BB46-4B8B-AF4D-F81BC61115B9',
            'nombre':
              'Proyectos transmedia y digitales conceptualizados / implementados',
            'formula': null,
            'meta': null,
            'peso': null,
            'tendencia': null,
            'criterio': null,
            'tipoIndicador': null,
            'categoriaIndicador': null,
          },
        ],
      },
      {
        'id': '122BD559-65ED-48AB-92BE-9AC0151F2BFF',
        'nombre':
          'Reconocimiento del Museo Nacional de Colombia como Centro de Ciencia',
        'descripcion': null,
        'indicadores': [],
      },
    ],
    'evaluadores': null,
  },
];

export const stateProjects: IEstadosProyectos[] = [
  {
    'id': '159FA122-0331-47A4-8EA7-23538AB53EF7',
    'nombre': 'Suspendido',
    'descripcion':
      'Este estado se habilita cuando el proyecto ha sido suspendido. Este estado se genera desde el formulario cierre del proyecto cuando el jefe del área da el VoBo del cierre',
    'proyectos': [],
  },
  {
    'id': '1637275A-8558-47B9-A962-5B541A40463F',
    'nombre': 'En Aprobación',
    'descripcion':
      'Este estado se habilita cuando el usuario termina eel diligenciamiento del formulario de proyectos y le da Enviar para Aprobación',
    'proyectos': [],
  },
  {
    'id': '43AC16F0-E73A-429F-9E05-A4EAC687A300',
    'nombre': 'Cierre Parcial',
    'descripcion':
      'Este estado se habilita cuando el proyecto se cierra de manera parcial con un avance que no llegó al 100% y que significa que será retomado posteriormente. Este estado se genera desde el formulario cierre del proyecto cuando el jefe del área da el VoBo del cierre',
    'proyectos': [],
  },
  {
    'id': '5760f5d8-62e3-44ad-95e2-adeaf27216a7',
    'nombre': 'Creado',
    'descripcion':
      'Este estado se habilita cuando el usuario inicia la creación del proyecto y lo guarda sin haber diligenciado todos los campos del formulario',
    'proyectos': [],
  },
  {
    'id': '5E52FF2A-44CD-4727-B302-C6C56B15E910',
    'nombre': 'No Aprobado',
    'descripcion':
      'Este estado se habilita cuando el usuario aprobador de la subdirección, correspondiente al área responsable,  No aprueba el proyecto',
    'proyectos': [],
  },
  {
    'id': '6054CEC5-9F64-4232-ABDF-DBD695CA42C8',
    'nombre': 'Finalizado',
    'descripcion':
      'Este estado se habilita cuando el proyecto ha cerrado totalmente, como prerrequisito para cambiar a este estado, las evidencias se deben subir por cada producto. Este estado se genera desde el formulario cierre del proyecto con el estado Cierre Total y cuando el jefe del área da el VoBo del cierre',
    'proyectos': [],
  },
  {
    'id': '708C04E6-6B95-432C-A0E2-AEFE8C17F509',
    'nombre': 'En cierre',
    'descripcion':
      'Este estado se habilita cuando el proyecto se cierra y está pendiente del visto bueno del cierre por parte del  líder del área responsable del proyecto',
    'proyectos': [],
  },
  {
    'id': '72D2EFD7-88AA-4842-ABDF-2DC96CC4B0F5',
    'nombre': 'Cancelado',
    'descripcion':
      'Este estado se habilita cuando el proyecto ha sido cancelado. Este estado se genera desde el formulario cierre del proyecto cuando el jefe del área da el VoBo del cierre',
    'proyectos': [],
  },
  {
    'id': '96223C82-9D0F-4C05-BBB6-C301F1257961',
    'nombre': 'Aprobado',
    'descripcion':
      'Este estado se habilita cuando el usuario aprobador de la subdirección, correspondiente al área responsable, Aprueba el proyecto',
    'proyectos': [],
  },
  {
    'id': 'D4D4E878-D680-4752-9CB4-86BC37C36A32',
    'nombre': 'En Curso',
    'descripcion':
      'Este estado se habilita cuando ha iniciado el proyecto de acuerdo a la fecha de inicio',
    'proyectos': [],
  },
];

export const areasProjects: any = [
  { id: '1', nombre: 'Area 1' },
  { id: '2', nombre: 'Area 2' },
  { id: '3', nombre: 'Area 3' },
];

export const EjesProjects: any = [
  { id: '1', nombre: 'Eje Estrategico 1' },
  { id: '2', nombre: 'Eje Estrategico 2' },
  { id: '3', nombre: 'Eje Estrategico 3' },
];

export const actionProjects: any = [
  { id: '1', nombre: 'Actions 1' },
  { id: '2', nombre: 'Actions 2' },
  { id: '3', nombre: 'Actions 3' },
];

export const areasApoyoProjects: IAreasPorMuseo[] = [
  {
    id: '123',
    idMuseo: 0,
    nombre: 'Area 1',
  },
  {
    id: '1234',
    idMuseo: 0,
    nombre: 'Area 2',
  },
];

export const tipologiaProjects: ITipologias[] = [
  {
    id: '3221',
    nombre: 'Tipologia 1',
    proyectos: [],
  },
  {
    id: '5647',
    nombre: 'Tipologia 2',
    proyectos: [],
  },
];

export const comunidadProjects: IComunidades[] = [
  {
    id: '1',
    nombre: 'Comunidad 1',
    pcdCs: [],
    pcdrEs: [],
  },
  {
    id: '2',
    nombre: 'Comunidad 2',
    pcdCs: [],
    pcdrEs: [],
  },
  {
    id: '3',
    nombre: 'Comunidad 3',
    pcdCs: [],
    pcdrEs: [],
  },
  {
    id: '4',
    nombre: 'Comunidad 4',
    pcdCs: [],
    pcdrEs: [],
  },
];

export const grupoEtarioProjects: IGrupoEtario[] = [
  {
    'id': '79ea1c0f-a401-46b3-b96f-15f9ec447546',
    'nombre': 'Primera infancia (0-5)',
    'orden': 1,
    'pcdrEs': [],
  },
  {
    'id': '7e57b27a-b2b6-491e-bed4-8fc59258d8f2',
    'nombre': 'Infancia (6-11)',
    'orden': 2,
    'pcdrEs': [],
  },
  {
    'id': 'dec037ab-0406-49b9-82e7-4d0d423abf43',
    'nombre': 'Adolescencia (12-18)',
    'orden': 3,
    'pcdrEs': [],
  },
  {
    'id': 'd119de7b-ecbf-42b8-9256-1c2b7b80fe27',
    'nombre': 'Juventud (19-28)',
    'orden': 4,
    'pcdrEs': [],
  },
  {
    'id': '7f1ef01c-41b7-437f-aac7-34360fdcaa54',
    'nombre': 'Adultez (29-59)',
    'orden': 5,
    'pcdrEs': [],
  },
  {
    'id': 'b55f835f-8abb-41cf-96f3-e0308daa0e32',
    'nombre': 'Adultos mayores (60+)',
    'orden': 6,
    'pcdrEs': [],
  },
];

export const departamentoProjects: IDepartamentos[] = [
  {
    id: 32,
    nombre: 'VAUPÉS',
    ciudades: [
      {
        id: 1119,
        nombre: 'PACOA',
      },
      {
        id: 1120,
        nombre: 'YAVARATE',
      },
    ],
  },
  {
    id: 33,
    nombre: 'VICHADA',
    ciudades: [
      {
        id: 1123,
        nombre: 'LA PRIMAVERA',
      },
      {
        id: 1122,
        nombre: 'NUEVA ANTIOQUIA',
      },
    ],
  },
];

export const aliadoList: IAliados[] = [
  {
    'id': '16D87027-112F-18DD-0B30-306305AA802D',
    'nombre': 'Alcaldía de Barranquilla',
    'caracterizacion': 'Público Barranquilla',
    'localizacion': 'Nacional Barranquilla',
  },
  {
    'id': '11746460-744A-08BA-6514-38B004A64140',
    'nombre': 'Alcaldía de Cali',
    'caracterizacion': 'Público Cali',
    'localizacion': 'Nacional Cali',
  },
  {
    'id': 'E8B593E8-73FC-6976-24E0-1FCB9E3D5B87',
    'nombre': 'Alcaldía de Pereira',
    'caracterizacion': 'Público Pereira',
    'localizacion': 'Nacional Pereira',
  },
];

export const rubroList: IGenericList[] = [
  {
    id: '0D4580CC-005E-4CC8-977F-D034DBCA90C5',
    nombre: 'Rubro 1',
  },
  {
    id: '1551E3EE-DCC3-4EA7-B734-8F016D3257C8',
    nombre: 'Rubro 2',
  },
];

export const tipoAporte: ITipoAporte[] = [
  {
    'id': '39cfe3f8-7ad1-4366-ae3b-e7e6178cbbc3',
    'nombre': 'Especie',
    'proyectoAliados': [],
  },
  {
    'id': '5309b81e-6a1a-415c-a4bc-a826bb915fec',
    'nombre': 'Recursos Humanos',
    'proyectoAliados': [],
  },
  {
    'id': 'cfb0c128-8b7f-48b7-bbbc-6c04bc034293',
    'nombre': 'Económico',
    'proyectoAliados': [],
  },
  {
    'id': 'dc09efc1-fe69-46a3-999b-5695c0f843d0',
    'nombre': 'Beneficios para los empleados',
    'proyectoAliados': [],
  },
];
