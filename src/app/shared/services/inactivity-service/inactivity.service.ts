import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { GeneralService } from '@services/general-service.service';
import { INACTIVITY_CONST } from '@shared/models/constants/general-service/inactivity.constants';
import {
  timer,
  Subscription,
  Observable,
  fromEvent,
  debounceTime,
  BehaviorSubject,
  merge,
  map,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private timerSubscription: Subscription | null = null;
  private userInactive$ = new BehaviorSubject<boolean>(false);
  private count$ = new BehaviorSubject<number>(INACTIVITY_CONST.timeOutCount);
  private timeControl: number;

  constructor(
    private generalService: GeneralService,
    private router: Router,
  ) {}

  // TODO Change the service when it will built
  public initInactivityTimeOut(): void {
    this.generalService.getTimeOut().subscribe(timeOut => {
      console.log('Init initInactivityTimeOut', timeOut);
      this.timeControl = timeOut ? timeOut : INACTIVITY_CONST.defaulTime;
      this.setInactivityTimeout(this.timeControl);
    });
  }

  private setInactivityTimeout(timeout: number) {
    const debounceTime = timeout * INACTIVITY_CONST.convertValue;
    console.log('Debouse trime', debounceTime, timeout)
    this.startInactivityCheck(debounceTime);
  }

  private startInactivityCheck(time: number): void {
    const events = ['click', 'mousemove', 'keydown', 'scroll'];
    merge(...events.map(event => fromEvent(window, event)))
      .pipe(debounceTime(time))
      .subscribe(() => {
        this.setUserActive = true;
        this.startInactivityModalTimer();
      });
  }

  public startInactivityModalTimer(): void {
    this.resetTimer();
    this.timerSubscription = timer(0, 1000)
      .pipe(
        map(seconds => {
          const countdown = INACTIVITY_CONST.timeOutCount - seconds;
          if (countdown === INACTIVITY_CONST.downCount) {
            this.endSession();
          }
          this.setTimeModal = countdown;
          return countdown;
        }),
      )
      .subscribe();
  }

  public resetTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  public endSession(): void {
    this.timerSubscription?.unsubscribe();
    this.router.navigate([NAVIGATION_TO.LOGIN], {
      queryParams: { endSession: true },
      replaceUrl: true,
    });
  }

  set setTimeModal(count: number) {
    this.count$.next(count);
  }

  get getTimeModal(): Observable<number> {
    return this.count$.asObservable();
  }

  get getTimeInit(): number {
    let minutes = Math.floor(this.timeControl / 60);
    return minutes;
  }

  public set setUserActive(status: boolean) {
    this.userInactive$.next(status);
  }

  public get getUserInactive(): Observable<boolean> {
    return this.userInactive$.asObservable();
  }
}
