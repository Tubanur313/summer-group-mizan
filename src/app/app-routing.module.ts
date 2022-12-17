import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
