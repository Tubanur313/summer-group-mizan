import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { SiteElementsComponent } from './site-elements/site-elements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './home/home.component';
// import { FaqComponent } from './faq/faq.component';
import { DialogComponent } from './dialog/dialog.component';
import { DiceComponent } from './entry-components/dice/dice.component';
// import { ElementsComponent } from './elements/elements.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { MyBsMainComponent } from './my-bs-main/my-bs-main.component';
// import { MyBsSubComponent } from './entry-components/my-bs-sub/my-bs-sub.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MyTabMainComponent } from './my-tab-main/my-tab-main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    // SiteElementsComponent,
    // HomeComponent,
    // FaqComponent,
    DialogComponent,
    DiceComponent,
    // ElementsComponent,
    // MyBsMainComponent,
    // MyBsSubComponent,
    // MyTabMainComponent,
  ],
  entryComponents: [DiceComponent,
    // MyBsSubComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
