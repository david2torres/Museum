import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { TITLE_BY_GROUP } from '@DomainConstants/paths/titleGroup.constants';
import { ICON_IMAGES } from '@DomainConstants/shared/icons-images.constants';
import { STORAGE_CONST } from '@DomainConstants/shared/storage.constants';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth-service.service';
import { SecureStorageService } from '@shared/security/storage/secure-storage.service';
import { selectToken } from 'app/core/application/states/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public ICON_IMAGES = ICON_IMAGES;
  public userName = signal<string>('');
  public entidad = signal<string>('');
  public module = signal<string>('');

  constructor(
    private store: Store,
    private authService: AuthService,
    private secureStorage: SecureStorageService,
  ) {
    this.store.select(selectToken).subscribe(resp => {
      console.log('Store Validation Header', resp);
    });
  }

  ngOnInit(): void {
    this.userName.update(() =>
      this.secureStorage.getItem(STORAGE_CONST.userName),
    );
    this.entidad.update(() =>
      this.secureStorage.getItem(STORAGE_CONST.nameMuseum),
    );
    this.setTitle();
  }

  private setTitle(): void {
    this.authService.getTitleRouter.subscribe(url => {
      const segments = url.split('/');
      const group = segments.find(segment =>
        Object.keys(TITLE_BY_GROUP).includes(segment),
      );
      this.module.update(() => (group ? TITLE_BY_GROUP[group] : ''));
    });
  }
}
