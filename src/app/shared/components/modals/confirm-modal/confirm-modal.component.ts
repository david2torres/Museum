import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'confirm-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent implements OnInit {
  public textModal = input.required<string>();
  public ICONS_CONST = ICON_IMAGES;

  ngOnInit(): void {
    console.log('Text Confirm', this.textModal());
  }
}
