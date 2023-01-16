import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';


const routes: Routes = [
  // { path: '',   redirectTo: 'elements', pathMatch: 'full' },
  { path: 'elements', component: ElementsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
