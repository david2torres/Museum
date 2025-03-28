import { IAppState } from '@DomainInterfaces/state/app.interface';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from 'app/core/application/states/reducers/auth.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  auth: authReducer,
};
