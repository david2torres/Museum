import { IModulo } from './userAuth.interface';

export interface IAuth_State {
  token: string;
  userName: string;
  role: string;
  idMuseo: number;
  menu: IModulo[];
}

export interface IAction_Auth {
  token: string;
  userName: string;
  role: string;
  idMuseo: number;
}

export interface IAction_Menu {
  modulos: IModulo[];
}
