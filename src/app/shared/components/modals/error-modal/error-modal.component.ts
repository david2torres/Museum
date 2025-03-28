import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorHandleService } from '@shared/services/error-handle/error-handle.service';

@Component({
  selector: 'error-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorModalComponent implements OnInit {
  public errorMessageService = inject(ErrorHandleService);
  public infoModal = signal<string>('');
  public infoCode = signal<string>('');
  public isViewModal = signal<boolean>(false);
  public ICONS_CONST = ICON_IMAGES;

  ngOnInit(): void {
    console.log('Text Info Modal', this.infoModal());
    this.errorMessageService.message$.subscribe(message => {
      this.infoModal.update(() => message);
    });

    this.errorMessageService.error_code$.subscribe(code => {
      this.infoCode.update(() => code);
      console.log('Messages Code', code);
    });

    this.errorMessageService.isErrorModal$.subscribe(isViewModal => {
      this.isViewModal.update(() => isViewModal);
    });
  }

  public actionConfirm(isLogout: boolean): void {
    this.errorMessageService.hide();
    console.log('Action Confirm', isLogout);
  }
}
