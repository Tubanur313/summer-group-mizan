import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SiteElementsComponent } from './site-elements/site-elements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { DialogComponent } from './dialog/dialog.component';
import { DiceComponent } from './dice/dice.component';
import { ElementsComponent } from './elements/elements.component';
import { MaterialModule } from 'src/material.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SiteElementsComponent,
    HomeComponent,
    FaqComponent,
    DialogComponent,
    DiceComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
