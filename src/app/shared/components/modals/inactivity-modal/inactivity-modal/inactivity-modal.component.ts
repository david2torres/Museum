import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { TranslateModule } from '@ngx-translate/core';
import { INACTIVITY_CONST } from '@shared/models/constants/general-service/inactivity.constants';
import { InactivityService } from '@shared/services/inactivity-service/inactivity.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'inactivity-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './inactivity-modal.component.html',
  styleUrls: ['./inactivity-modal.component.scss'],
})
export class InactivityModalComponent implements OnInit, OnDestroy {
  public ICONS_CONST = ICON_IMAGES;
  private notValidateInactivity = INACTIVITY_CONST.restrictedRoutes;
  public showModal = signal<boolean>(false);
  public countdown = signal<number>(INACTIVITY_CONST.timeOutCount);
  public minutes: number = 0;
  countdownSubscription: Subscription | null = null;
  private _unSubscribe = new Subject<void>();

  constructor(
    private inactivityService: InactivityService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.listenerInactiveUser();
  }

  private listenerInactiveUser(): void {
    this.inactivityService.getUserInactive.subscribe(isInactive => {
      if (this.notValidateInactivity.includes(this.router.url)) {
        this.inactivityService.resetTimer();
        return;
      }
      if (isInactive) {
        this.openModal();
      }
    });
  }

  openModal() {
    this.showModal.update(() => true);
    this.startCountdown();
  }

  startCountdown() {
    this.inactivityService.startInactivityModalTimer();
    this.countdownSubscription = this.inactivityService.getTimeModal
      .pipe(takeUntil(this._unSubscribe))
      .subscribe(timeOut => {
        this.minutes = this.inactivityService.getTimeInit;
        this.countdown.update(() => timeOut);
        if (this.countdown() <= INACTIVITY_CONST.downCount) {
          this.showModal.update(() => false);
          this.countdownSubscription?.unsubscribe();
          this.inactivityService.setTimeModal = INACTIVITY_CONST.timeOutCount;
          this.inactivityService.setUserActive = false;
        }
      });
  }

  public continueSession() {
    this.showModal.update(() => false);
    this.inactivityService.resetTimer();
    this.countdownSubscription?.unsubscribe();
    this.inactivityService.setUserActive = false;
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
