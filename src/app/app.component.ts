import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.title);
  }
  useLanguage(language: string) {
    this.title=language;
    this.translate.use(language);
} 
}
