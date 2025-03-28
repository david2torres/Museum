export interface IPermissionAction {
  id?: string;
  nombre?: string;
  descripcion?: string;
  crear: boolean;
  leer: boolean;
  editar: boolean;
  borrar: boolean;
}
