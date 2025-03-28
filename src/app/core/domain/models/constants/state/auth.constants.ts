import { IAuth_State } from '@DomainInterfaces/actionsState.interface';

export const initialAuthStateConst: IAuth_State = {
  token: null,
  userName: null,
  role: null,
  idMuseo: null,
  menu: [],
};
