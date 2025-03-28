import { Injectable } from '@angular/core';
import { IPestanas } from '@DomainInterfaces/userAuth.interface';
import { IPermissionAction } from '@shared/models/interfaces/permission-action.interface';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private permission: IPermissionAction;

  constructor() {}

  public loadPermision(data: IPestanas): void {
    this.permission = {
      crear: data.crear,
      leer: data.leer,
      editar: data.editar,
      borrar: data.borrar,
    };
  }

  get getPermissionAction(): IPermissionAction {
    return this.permission;
  }
}
