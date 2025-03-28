import {
  IAuthError,
  IUserLoginNormalize,
  IUserLoginRespone,
} from '@DomainInterfaces/userAuth.interface';

export type IAutResponseType = IUserLoginRespone | IAuthError;

export type IAuthReturnValue = IUserLoginNormalize | IAuthError;
