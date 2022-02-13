import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-works', component: OurWorksComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
