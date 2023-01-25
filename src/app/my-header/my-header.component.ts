import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  title = "Tutor";
  constructor(private translate: TranslateService, private langService: LanguageService) {
    localStorage.setItem("lang", "en")
    this.translate.use(this.langService.getLang().toLowerCase());
   }

  useLanguage(language: string) {
    this.langService.setLang(language);
    this.translate.use(this.langService.getLang().toLowerCase());
  }
   lang(){
     return this.langService.getLang();
   }

  ngOnInit(): void {
  }

  showData() {
    console.log("button is clicked!"); 
   
  }



}
