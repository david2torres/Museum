import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-download-reports',
  standalone: true,
  imports: [],
  templateUrl: './download-reports.component.html',
  styleUrl: './download-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadReportsComponent {}
