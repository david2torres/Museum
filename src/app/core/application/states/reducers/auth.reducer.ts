import { initialAuthStateConst } from '@DomainConstants/state/auth.constants';
import { IAuth_State } from '@DomainInterfaces/actionsState.interface';
import { createReducer, on } from '@ngrx/store';
import { setLogin, setLogout, setMenu } from '../actions/auth.actions';

export const initialAuthState: IAuth_State = initialAuthStateConst;

export const authReducer = createReducer(
  initialAuthState,
  on(setLogin, (state, { token, userName, role, idMuseo }) => ({
    ...state,
    token,
    userName,
    role,
    idMuseo,
  })),

  on(setLogout, state => ({
    ...state,
    token: null,
    userName: null,
    role: null,
    idMuseo: null,
    menu: [],
  })),

  on(setMenu, (state, { modulos }) => ({
    ...state,
    modulos,
  })),
);
