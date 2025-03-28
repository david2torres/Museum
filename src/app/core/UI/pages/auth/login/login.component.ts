import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LOGIN_MODULES } from './loginModule';
import { Subject, takeUntil } from 'rxjs';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { Router } from '@angular/router';
import { IUserLoginNormalize } from '@DomainInterfaces/userAuth.interface';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { LOGIN_CONST } from '@DomainConstants/auth/login.constants';
import { REGEX_PATTERNS } from '@DomainConstants/shared/regex.constants';
import { IAuthReturnValue } from '@DomainConstants/types/auth.types';
import { AuthService } from '@services/auth-service.service';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [...LOGIN_MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  public ICON_IMAGES = ICON_IMAGES;
  public NAVIGATE_ROUTES = NAVIGATION_TO;
  public messageError: string = LOGIN_CONST.FIRST_ERROR;
  public loginError = signal<boolean>(false);
  public isEndInactivity = signal<boolean>(false);
  public blockAccount: boolean = false;

  public loginForm: FormGroup;
  public isLoader: boolean = false;
  public isError: boolean = false;
  public passwordVisible: boolean = false;
  private _unSubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.router.url === LOGIN_CONST.INACTIVITY_ROUTE) {
      this.isEndInactivity.update(() => true);
    }
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(REGEX_PATTERNS.emailRegex),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  public loginSubmit(): void {
    this.isLoader = true;
    this.isError = false;
    if (!this.loginForm.invalid) {
      const email = this.getEmail.value;
      const password = this.getPassword.value;
      this.authService
        .login(email, password)
        .pipe(takeUntil(this._unSubscribe))
        .subscribe((resp: IAuthReturnValue) => {
          if ('error' in resp) {
            this.loginForm.reset();
            if (resp.status !== 500) {
              this.loginError.update(() => true);
              this.setMessageError(resp.error.mensaje);
            }
            return;
          }
          this.validateRedirect(resp);
        });
    }
  }

  private validateRedirect(entities: IUserLoginNormalize): void {
    if (entities.entidades.length !== 0) {
      this.authService.setEntidadesUser = entities.entidades;
      this.navigateTo(this.NAVIGATE_ROUTES.ENTITIES);
    } else {
      this.navigateTo(this.NAVIGATE_ROUTES.BOARD);
    }
  }

  public setMessageError(message: string): void {
    this.isError = true;
    this.messageError = message;
  }

  public togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  public onInput() {
    if (this.loginError) {
      this.isLoader = false;
      this.loginError.update(() => false);
    }
  }

  private get getEmail() {
    return this.loginForm.get('email');
  }

  private get getPassword() {
    return this.loginForm.get('password');
  }

  public navigateTo(component: string): void {
    this.router.navigate([component]);
  }

  public goLogin(): void {
    this.isEndInactivity.update(() => false);
    this.navigateTo(NAVIGATION_TO.LOGIN);
  }

  ngOnDestroy(): void {
    this._unSubscribe.next();
    this._unSubscribe.complete();
  }
}
