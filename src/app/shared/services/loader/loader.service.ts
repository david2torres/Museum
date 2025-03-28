import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  private isFullScreen = new BehaviorSubject<boolean>(false);
  private styleLoader = new BehaviorSubject<string>('modal-content');
  public isLoading$ = this.isLoading.asObservable();
  public isFullScreen$ = this.isFullScreen.asObservable();
  public styleLoader$ = this.styleLoader.asObservable();

  public showLoader(fullScreen: boolean = false) {
    this.isFullScreen.next(fullScreen);
    this.isLoading.next(true);
  }

  public hideLoader() {
    this.isLoading.next(false);
  }

  public setStyleLoader(style: string): void {
    this.styleLoader.next(style);
  }
}
