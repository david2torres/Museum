import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GeneralService } from '@services/general-service.service';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { ErrorModalComponent } from '@shared/components/modals/error-modal/error-modal.component';
import { InactivityModalComponent } from '@shared/components/modals/inactivity-modal/inactivity-modal/inactivity-modal.component';
import { InactivityService } from '@shared/services/inactivity-service/inactivity.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TranslateModule,
    LoaderComponent,
    ErrorModalComponent,
    InactivityModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'SIM';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private generalService: GeneralService,
    private inactivityService: InactivityService,
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(
      browserLang && browserLang.match(/en|es/) ? browserLang : 'en',
    );
  }

  ngOnInit(): void {
    this.listenerRouter();
    this.inactivityService.initInactivityTimeOut();
  }

  private listenerRouter(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.generalService.setGlobalPath = event.url;
        }
      });
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }
}
