import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ElementsComponent } from './elements/elements.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyTestComponent } from './my-test/my-test.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'test', component: MyTestComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'elements', component: ElementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
