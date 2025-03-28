export type actionOrigin = 'cancel' | 'delete' | 'confirm' | 'error';

export type TPlanningActionForm = 'getPlansForm' | 'getActionsForm';

export type TActionMuliSelect =
  | 'noShowInputList' // NO LISTAR ELEMENTOS DEBAJO  DEL INPUT
  | 'idLineamientoEstrategico'
  | 'idEvaluador'
  | 'lineamientosEstrategicos'
  | 'indicadores'
  | 'areasApoyo'
  | 'gruposEtarios'
  | 'municipios'
  | (string & {});
