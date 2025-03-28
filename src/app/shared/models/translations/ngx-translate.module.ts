import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'ngx-translate-cut';
import { HttpLoaderFactory } from './app.load.lang';

@NgModule({
  declarations: [],
  imports: [
    NgxTranslateCutModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [NgxTranslateCutModule, TranslateModule],
})
export class NgxTranslateModule {}
