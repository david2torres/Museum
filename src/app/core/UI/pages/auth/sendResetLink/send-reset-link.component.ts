/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX_CONST_SHARED } from '@shared/models/constants/regex/regex.constants';
import { Subject, takeUntil } from 'rxjs';
import { RESET_MODULES } from './sendResetLinkModule';
import { Router } from '@angular/router';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { AuthService } from '@services/auth-service.service';

@Component({
  selector: 'reset-component',
  standalone: true,
  imports: [...RESET_MODULES],
  templateUrl: './send-reset-link.component.html',
  styleUrl: './send-reset-link.component.scss',
})
export class ResetLinkComponent implements OnDestroy {
  public ICON_IMAGES = ICON_IMAGES;
  public NAVIGATE_TO = NAVIGATION_TO;
  public isEmailError: boolean = false;
  public resetError = signal<boolean>(false);
  public successEmail = signal<boolean>(false);
  public messageError = signal<string>(null);
  public resetForm: FormGroup;
  private _unSubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.resetForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(REGEX_CONST_SHARED.emailRegex),
        ],
      ],
    });
  }

  public resetLinkSubmit(): void {
    if (!this.resetForm.invalid) {
      const email = this.getEmail.value;
      console.log('Email', email);
      this.authService
        .sendResetLink(email)
        .pipe(takeUntil(this._unSubscribe))
        .subscribe((resp: any) => {
          if (resp && resp.error && resp.status !== 500) {
            console.error('Error', resp.error);
            this.updateStates(true, resp.error.message);
            this.resetForm.reset();
            return;
          }
          this.successEmail.update(() => true);
          console.log('Datos Usuario', resp);
          this.updateStates(false);
        });
    }
  }

  private updateStates(state: boolean, message?: string): void {
    this.isEmailError = state;
    this.messageError.update(() => message);
    this.resetError.update(() => state);
  }

  public onInput() {
    if (this.resetError) {
      this.resetError.update(() => false);
    }
  }

  private get getEmail() {
    return this.resetForm.get('email');
  }

  public navigateToLogin(): void {
    if (this.successEmail()) {
      this.resetLinkSubmit();
    } else {
      this.router.navigate([this.NAVIGATE_TO.LOGIN]);
    }
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
