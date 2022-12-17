import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SiteElementsComponent } from './site-elements/site-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyHeaderComponent,
    MyFooterComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    SiteElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
