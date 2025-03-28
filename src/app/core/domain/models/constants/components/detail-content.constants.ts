import { IStatusClassMap } from '@DomainInterfaces/detail-content.interface';

export const INIT_POSITION_CONST = { top: 10, left: 0 };

export const STATUS_CLASS_MAP_CONST: IStatusClassMap = {
  'No Aprobado': 'estado-no-aprobado',
  'Aprobado': 'estado-aprobado',
  'En Curso': 'estado-en-curso',
  'Finalizado': 'estado-finalizado',
  'Suspendido': 'estado-suspendido',
  'Cancelado': 'estado-cancelado',
  'Rechazado': 'estado-rechazado',
  'En Aprobación': 'estado-en-aprobacion',
  'En Cierre': 'estado-en-cierre',
  'En cierre': 'estado-en-cierre',
  'Cierre Parcial': 'estado-cierre-parcial',
  'Creado': 'estado-en-registro',
};
