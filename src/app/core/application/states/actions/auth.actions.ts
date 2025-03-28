import {
  IAction_Auth,
  IAction_Menu,
} from '@DomainInterfaces/actionsState.interface';
// import { Modulo } from '@DomainInterfaces/userAuth.interface';
import { createAction, props } from '@ngrx/store';

export const setLogin = createAction('[Auth] Set Login', props<IAction_Auth>());
export const setLogout = createAction('[Auth] Set Logout');
export const setMenu = createAction('[Auth] Set Menu', props<IAction_Menu>());
