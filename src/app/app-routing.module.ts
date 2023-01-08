import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { ElementsComponent } from './elements/elements.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { SiteElementsComponent } from './site-elements/site-elements.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'site-elements', component: SiteElementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
