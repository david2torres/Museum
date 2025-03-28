import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandleService } from '@shared/services/error-handle/error-handle.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(public errorHandle: ErrorHandleService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err) {
          switch (err.status) {
            case 400:
              this.errorHandle.show(err.error.message, String(err.status));
              break;
            case 401:
              this.errorHandle.show(
                err.error.message
                  ? err.error.message
                  : 'ERROR_MESSAGES.askForHelp',
                String(err.status),
              );
              break;
            case 403:
              this.errorHandle.show(
                'ERROR_MESSAGES.messageGeneric',
                String(err.status),
              );
              break;
            case 404:
              this.errorHandle.show(
                'ERROR_MESSAGES.askForHelp',
                String(err.status),
              );
              break;
            case 500:
              this.errorHandle.show(
                'ERROR_MESSAGES.askForHelp',
                `Cod: ${err.error.message}`,
              );
              break;
            // default:
            //   this.errorHandle.show("ERROR_MESSAGES.messageGeneric", String(err.status));
            //   break;
          }
          return throwError(() => err);
        }
      }),
    );
  }
}
