import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from '@angular/core';
import { actionOrigin } from '@DomainConstants/types/actions.types';
import {
  IConfirmActionModal,
  IEmmitrAction,
} from '@DomainInterfaces/planning.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'confirm-action-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './confirm-action-modal.component.html',
  styleUrl: './confirm-action-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmActionModalComponent implements OnInit {
  public textModal = input.required<IConfirmActionModal>();
  public actionButton = output<IEmmitrAction>();

  ngOnInit(): void {
    console.log('Text Modal', this.textModal());
  }

  public actionConfirm(action: boolean, origin: actionOrigin): void {
    const modalInfo: IEmmitrAction = {
      origin: origin,
      action: action,
    };
    this.actionButton.emit(modalInfo);
  }
}
