/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoaderService } from '@shared/services/loader/loader.service';
import {
  CONST_LOADER_STYLE,
  STYLE_LOADER_NAME,
} from '@DomainConstants/shared/loader.constants';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let isFullScreen = true;

    if (this.isAuthRequest(req) || this.isFullRequest(req)) {
      isFullScreen = true;
    } else if (this.isModalRequest(req)) {
      isFullScreen = false;
    }

    this.loaderService.setStyleLoader(this.setStyleLoader(req));
    this.loaderService.showLoader(isFullScreen);

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Sucess Response');
        }
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      }),
    );
  }

  private isAuthRequest(request: HttpRequest<any>): boolean {
    return request.url.includes('/Autenticacion');
  }

  private isFullRequest(request: HttpRequest<any>): boolean {
    return request.method === 'GET';
  }

  private isModalRequest(request: HttpRequest<any>): boolean {
    return request.method === 'POST' || request.method === 'PUT';
  }

  private setStyleLoader(request: HttpRequest<any>): string {
    const styleMap = CONST_LOADER_STYLE;
    for (const key in styleMap) {
      if (request.url.includes(key)) {
        return styleMap[key];
      }
    }
    return STYLE_LOADER_NAME.defaultModal;
  }
}
