import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
// import { DialogComponent } from './dialog/dialog.component';
// import { ElementsComponent } from './elements/elements.component';
// import { FaqComponent } from './faq/faq.component';
// import { HomeComponent } from './home/home.component';
// import { MyBsMainComponent } from './my-bs-main/my-bs-main.component';
// import { MyTabMainComponent } from './my-tab-main/my-tab-main.component';
// import { SiteElementsComponent } from './site-elements/site-elements.component';

const routes: Routes = [
  // { path: '',   redirectTo: 'elements', pathMatch: 'full' },
  { path: 'elements', component: ElementsComponent },


  // { path: 'faq', component: FaqComponent },
  // { path: 'dialog', component: DialogComponent },
  // { path: 'bottom-sheet', component: MyBsMainComponent },
  // { path: 'tab', component: MyTabMainComponent },
  // { path: 'elements', component: ElementsComponent },
  // { path: 'site-elements', component: SiteElementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
