import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeneralRepository } from '../repositories/general-repository.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private globalPath = new BehaviorSubject<string>('');

  constructor(private generalServiceUseCase: GeneralRepository) {}

  public getTimeOut(): Observable<number> {
    return this.generalServiceUseCase.getTimeOut();
  }

  public set setGlobalPath(path: string) {
    this.globalPath.next(path);
  }

  public get getGlobalPath(): Observable<string> {
    return this.globalPath.asObservable();
  }
}
