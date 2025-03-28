export interface IUserLoginRespone {
  mensaje: string;
  token: string;
  idSesion: string;
  nombreUsuario: string;
  emailUsuario: string;
  area: IAreaUser;
  museos: Entidade[];
}

export interface IAreaUser {
  id: string;
  nombre: string;
}
export interface IChangePassword {
  email: string;
  password: string;
  token: string;
}

export interface IAuthError {
  headers: Headers;
  status: number | string;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: Error;
}

export interface Error {
  mensaje: string;
  token: string;
  idSesion: string;
  nombreUsuario: string;
  museos?: string;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate: null;
}

export interface NormalizedNames {}

export interface IUserLoginNormalize {
  mensaje: string;
  token?: string;
  entidades: Entidade[];
}

export interface Entidade {
  id: number;
  nombre: string;
  roles: Role[];
  modulos: IModulo[];
}

export interface IModulo {
  id: number;
  ordenPresentacion: number;
  nombre: string;
  icono: string;
  imagen: string;
  ruta: string;
  funcionalidades: Funcionalidade[];
}

export interface Funcionalidade {
  ruta: string;
  nombre: string;
  leer: boolean;
  id: number;
  icono: string;
  editar: boolean;
  descripcion: string;
  crear: boolean;
  borrar: boolean;
  pestanas: IPestanas[];
}
export interface IPestanas {
  nombre: string;
  leer: boolean;
  id: string;
  editar: boolean;
  descripcion: string;
  crear: boolean;
  borrar: boolean;
}
export interface Role {
  id: string;
  nombre: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}
export interface entidadRolesFuncionalidad {
  id: number;
  nombre: string;
  ordenPresentacion: number;
  icono: string;
  imagen: string;
  ruta: string;
  funcionalidades: Funcionalidade[];
}
export interface IUserChangePasswordRequest {
  email: string;
  passwordActual: string;
  nuevoPassword: string;
  vieneDeEmail: boolean;
}
