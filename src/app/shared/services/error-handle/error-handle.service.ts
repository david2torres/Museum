import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  private isErrorModal = new BehaviorSubject<boolean>(false);
  private message = new BehaviorSubject<string>('');
  private error_code = new BehaviorSubject<string>('');
  public message$ = this.message.asObservable();
  public error_code$ = this.error_code.asObservable();
  public isErrorModal$ = this.isErrorModal.asObservable();

  show(message, error_code?: string) {
    this.isErrorModal.next(true);
    this.message.next(message);
    this.error_code.next(error_code);
  }

  hide() {
    this.isErrorModal.next(false);
  }
}
