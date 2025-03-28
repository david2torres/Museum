import { IAuth_State } from '@DomainInterfaces/actionsState.interface';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<IAuth_State>('auth');

export const selectToken = createSelector(
  selectAuthState,
  state => state.token,
);
export const selectUserName = createSelector(
  selectAuthState,
  state => state.userName,
);
export const selectUserRole = createSelector(
  selectAuthState,
  state => state.role,
);
export const selectIdMuseo = createSelector(
  selectAuthState,
  state => state.idMuseo,
);
export const selectMenu = createSelector(selectAuthState, state => state.menu);
