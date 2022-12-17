import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
