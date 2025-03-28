/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private useMock = environment.useMocks;

  private succesResponse: any = {
    message: 'Success Response',
  };

  constructor(private http: HttpClient) {}

  public get<T>(url: string, mockData?: T): Observable<T> {
    if (this.useMock) {
      return of(mockData ? mockData : this.succesResponse).pipe(delay(500));
    } else {
      return this.http.get<T>(url);
    }
  }

  public post<T>(url: string, data: unknown, mockData?: T): Observable<T> {
    if (this.useMock) {
      return of(mockData ? mockData : this.succesResponse).pipe(delay(500));
    } else {
      return this.http.post<T>(url, data);
    }
  }

  public put<T>(url: string, data: unknown, mockData?: T): Observable<T> {
    if (this.useMock) {
      return of(mockData ? mockData : this.succesResponse).pipe(delay(500));
    } else {
      return this.http.put<T>(url, data);
    }
  }

  public delete<T>(url: string, mockData?: T): Observable<T> {
    if (this.useMock) {
      return of(mockData ? mockData : this.succesResponse).pipe(delay(500));
    } else {
      return this.http.delete<T>(url);
    }
  }
}
