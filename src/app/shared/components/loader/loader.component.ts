import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { LoaderService } from '@shared/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
  private loaderService = inject(LoaderService);
  isLoading = signal<boolean>(false);
  isFullScreen = signal<boolean>(true);
  styleLoader = signal<string>('');

  ngOnInit(): void {
    this.setValues();
  }

  private setValues(): void {
    this.loaderService.isLoading$.subscribe(loading =>
      this.isLoading.update(() => loading),
    );
    this.loaderService.isFullScreen$.subscribe(screen =>
      this.isFullScreen.update(() => screen),
    );
    this.loaderService.styleLoader$.subscribe(style => {
      this.styleLoader.update(() => style);
    });
  }
}
