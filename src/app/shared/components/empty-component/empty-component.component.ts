import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from '@angular/core';
import { APP_CONST } from '@DomainConstants/shared/app.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'empty-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './empty-component.component.html',
  styleUrl: './empty-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponentComponent implements OnInit {
  public message = input.required<string>();
  public actionButton = output<void>();
  public ICONS_CONST = ICON_IMAGES;
  public infoMessage: string;

  ngOnInit(): void {
    this.setMessage();
  }

  public openCloseModal() {
    this.actionButton.emit();
  }

  public setMessage(): void {
    this.infoMessage = `${APP_CONST.Planning}${this.message()}`;
  }
}
