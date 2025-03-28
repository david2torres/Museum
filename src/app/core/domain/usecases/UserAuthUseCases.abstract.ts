import {
  IChangePassword,
  IUserLoginRespone,
} from '@DomainInterfaces/userAuth.interface';
import { Observable } from 'rxjs';

export abstract class AbstractUserAuthUseCases {
  abstract login( email: string, password: string, ): Observable<IUserLoginRespone>;
  abstract sendResetLink(email: string): Observable<void>;
  abstract changePassword(body: IChangePassword): Observable<void>;
  abstract Logout(): Observable<void>;
}
