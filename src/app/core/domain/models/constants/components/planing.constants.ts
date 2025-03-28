export const PLANNING_MENU = [
  { id: 1, name: 'Lineamientos Estratégicos' },
  { id: 2, name: 'Planes Estratégicos' },
  { id: 3, name: 'Indicadores' },
];

export const INIT_EDIT = {
  idEdit: false,
  elementSelected: null,
};

export const PLANNING_SERVICE_CONST = {
  create_guideline: 'createGuideLine',
  edit_guideline: 'editGuideline',
  create_plans: 'createStrategicPlans',
  edit_plans: 'editStrategicPlans',
  create_indicator: 'createTypeIndicators',
  edit_indicator: 'editTypeIndicators',
  edit_eje_strategic: 'editEjeStrategic',
};

export const MONTHS_CONST = [
  {
    value: 1,
    name: 'Enero',
  },
  {
    value: 2,
    name: 'Febrero',
  },
  {
    value: 3,
    name: 'Marzo',
  },
  {
    value: 4,
    name: 'Abril',
  },
  {
    value: 5,
    name: 'Mayo',
  },
  {
    value: 6,
    name: 'Junio',
  },
  {
    value: 7,
    name: 'Julio',
  },
  {
    value: 8,
    name: 'Agosto',
  },
  {
    value: 9,
    name: 'Septiembre',
  },
  {
    value: 10,
    name: 'Octubre',
  },
  {
    value: 11,
    name: 'Noviembre',
  },
  {
    value: 12,
    name: 'Diciembre',
  },
];

export const UNIDAD_MEDIDA_CONST = [
  {
    id: 'Unidad',
    name: 'Unidad',
  },
  {
    id: 'Porcentaje',
    name: 'Porcentaje',
  },
  {
    id: 'Tasa',
    name: 'Tasa',
  },
];

export const CLASIFICACION_CONST = [
  {
    id: 'Producto',
    name: 'Producto',
  },
  {
    id: 'Resultado',
    name: 'Resultado',
  },
  {
    id: 'Gestión',
    name: 'Gestión',
  },
];

export const LIMIT = {
  input: 150,
  textArea: 300,
  advance:1500
};

export const MENU_STRATEGIC_PLANNING = {
  guidelines: 'Lineamientos Estratégicos',
  strategicPlans: 'Planes Estratégicos',
  indicators: 'Indicadores',
};
