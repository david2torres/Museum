import { IModulo } from '@DomainInterfaces/userAuth.interface';

export class Auth_Model {
  public token: string;
  public userName: string;
  public role: string;
  public idMuseo: number;
  public menu: IModulo[];

  constructor(
    token: string,
    userName: string,
    role: string,
    idMuseo: number,
    menu: IModulo[],
  ) {
    this.token = token;
    this.userName = userName;
    this.role = role;
    this.idMuseo = idMuseo;
    this.menu = menu;
  }
}
