/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { CHANGE_PASSWORD_MODULES } from './changePasswordModule';
import { NAVIGATION_TO } from '@DomainConstants/auth/auth.constants';
import { PasswordRequirement } from '@DomainInterfaces/requirementPasswor.interface';
import {
  GENARAL_CHANGE_PASSWORD_CONST,
  MESSAGE_CHANGE_PASSWORD_CONST,
  PROGRESS_BAR_CONST,
  PROGRESS_KEY_CONST,
  REQUIRED_PASSWORD_CONST,
} from '@DomainConstants/auth/changePassword.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX_PATTERNS } from '@DomainConstants/shared/regex.constants';
import { CHANGE_PASSWORD_ICON } from '@DomainConstants/shared/icons-images.constants';
import { ProgresssBarClass_Enum } from 'app/core/domain/models/enum/changePassword/progress-bar.enum';
import { IProgressBar } from '@DomainInterfaces/progressbar.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { IChangePassword } from '@DomainInterfaces/userAuth.interface';
@Component({
  selector: 'change-password',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...CHANGE_PASSWORD_MODULES],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent implements OnInit {
  public isMediumPattern = REGEX_PATTERNS.mediumPassword;
  public isStrongPattern = REGEX_PATTERNS.strongPassword;
  public progressBarWidth: number = 0;
  public progressBarClass: string = ProgresssBarClass_Enum.default;

  public changePasswordForm: FormGroup;
  public ICON_IMAGES = CHANGE_PASSWORD_ICON;
  public NAVIGATE_ROUTES = NAVIGATION_TO;

  public initPasswordVisible: boolean = false;
  public confirmPasswordVisible: boolean = false;
  public isConfirmLogin = signal<boolean>(false);
  public isErrorChangePassword = signal<boolean>(false);

  public requirementPassword = signal<PasswordRequirement[]>(
    REQUIRED_PASSWORD_CONST,
  );
  public isAllCheckedRequired = signal<boolean>(false);
  public noMatchPassword = signal<boolean>(false);
  public enableButton = signal<boolean>(false);
  public messageError = signal<string>(
    MESSAGE_CHANGE_PASSWORD_CONST.FIRST_ERROR,
  );

  public isWriteError = computed(() => {
    return this.validateRequiredPassword();
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDataUser();
    this.noMatchPassword.update(() => true);
  }

  private loadDataUser(): void {
    this.route.queryParams.subscribe(params => {
      const userName = params['userName'];
      const token = params['token'];
      if (userName && token) {
        this.secureStorage.setItem(STORAGE_CONST.userName, userName);
        this.secureStorage.setItem(STORAGE_CONST.token, token);
      }
    });
  }

  private initForm(): void {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmedPassword: [{ value: '', disabled: true }, [Validators.required]],
    });
    this.listenerForm();
  }

  private listenerForm(): void {
    this.getNewPassword.valueChanges.subscribe(value => {
      this.updatePasswordRequirements(value);
      this.setControlErrorPassword();
      this.setProgressBarStyles(value);
    });

    this.getConfirmedPassword.valueChanges.subscribe(value => {
      this.validateSamePassword(value);
    });
  }

  private setProgressBarStyles(password: string): void {
    const progressBarMapping: IProgressBar = PROGRESS_BAR_CONST;
    const key = this.validateSecurityPassword(password);
    const progressBar = progressBarMapping[key];
    this.progressBarWidth = progressBar.width;
    this.progressBarClass = progressBar.className;
  }

  private validateSecurityPassword(password: string): string {
    let key: string = PROGRESS_KEY_CONST.default;
    const medium = this.isMediumPattern.test(password);
    const strong = this.isStrongPattern.test(password);
    if (!this.isWriteError()) {
      key = PROGRESS_KEY_CONST.weak;
      return key;
    } else if (medium) {
      key = PROGRESS_KEY_CONST.medium;
      return key;
    } else if (strong) {
      key = PROGRESS_KEY_CONST.strong;
      return key;
    } else {
      key = PROGRESS_KEY_CONST.default;
      return key;
    }
  }

  private updatePasswordRequirements(password: string): void {
    const req = this.requirementPassword().map(
      (requirement: PasswordRequirement) => {
        if (!password) {
          this.getConfirmedPassword.disable;
          return this.resetRequirement(requirement);
        } else {
          return this.evaluateRequirement(requirement, password);
        }
      },
    );
    this.requirementPassword.set(req);
  }

  private setControlErrorPassword(): void {
    if (this.isWriteError() && !!this.getNewPassword.value) {
      this.getConfirmedPassword.enable();
    } else {
      this.enableButton.update(() => false);
    }
    if (!this.getNewPassword.value) {
      this.validateSamePassword(this.getConfirmedPassword.value);
    }
  }

  private resetRequirement(requirement: PasswordRequirement) {
    return {
      ...requirement,
      icon: GENARAL_CHANGE_PASSWORD_CONST.default_icon,
      fulfilled: false,
    };
  }

  private evaluateRequirement(req: PasswordRequirement, password: string) {
    const fulfilled = req.regex ? new RegExp(req.regex).test(password) : false;
    const icon = fulfilled
      ? GENARAL_CHANGE_PASSWORD_CONST.check_icon
      : GENARAL_CHANGE_PASSWORD_CONST.alert_icon;
    return {
      ...req,
      fulfilled,
      icon,
    };
  }

  private validateRequiredPassword(): boolean {
    return this.requirementPassword().every(elem => {
      if (!this.getNewPassword.value) {
        return true;
      }
      return elem.fulfilled;
    });
  }

  private validateSamePassword(confirmedPassword: string): void {
    this.messageError.update(() => MESSAGE_CHANGE_PASSWORD_CONST.FIRST_ERROR);
    this.isErrorChangePassword.update(() => false);

    let newPassword = this.getNewPassword.value;
    let confirmPassword = confirmedPassword.trimEnd();

    if (
      this.isWriteError() &&
      !!newPassword &&
      !!confirmPassword &&
      newPassword === confirmPassword
    ) {
      this.noMatchPassword.update(() => true);
      this.enableButton.update(() => true);
    } else if (newPassword) {
      this.noMatchPassword.update(() => false);
      this.enableButton.update(() => false);
    }
  }

  get getNewPassword() {
    return this.changePasswordForm.get(
      GENARAL_CHANGE_PASSWORD_CONST.form_newPassword,
    );
  }

  get getConfirmedPassword() {
    return this.changePasswordForm.get(
      GENARAL_CHANGE_PASSWORD_CONST.form_confirmedPassword,
    );
  }

  public togglePasswordVisibility(passwordViewInput: string) {
    this[passwordViewInput] = !this[passwordViewInput];
  }

  public onSubmit() {
    //TODO CORRRECTO REDIRECT TO LOGIN - INVALID KEEP IN WINDOW
    if (this.changePasswordForm.valid) {
      const body: IChangePassword = {
        email: this.secureStorage.getItem(STORAGE_CONST.userName),
        token: this.secureStorage.getItem(STORAGE_CONST.token),
        password: this.getConfirmedPassword.value,
      };
      this.authService.changePassword(body).subscribe((resp: any) => {
        console.log('Service response Change Password', resp);
        if (resp && resp.error.message && resp.error.status !== 400) {
          this.isErrorChangePassword.update(() => true);
          this.messageError.update(() => resp.error.message);
          console.log('Error Not change Password', resp.error.message);
          return;
        }
        this.isConfirmLogin.update(() => true);
      });
      console.log('Form Submitted!', body);
    }
  }

  public goToLogin(): void {
    this.router.navigate([this.NAVIGATE_ROUTES.LOGIN], {
      replaceUrl: true,
    });
  }
}
