import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesLogoComponent } from './services-logo/services-logo.component';
import { ServicesWebsiteComponent } from './services-website/services-website.component';
import { ServicesWebshopComponent } from './services-webshop/services-webshop.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'logo', component: ServicesLogoComponent },
  { path: 'website', component: ServicesWebsiteComponent },
  { path: 'webshop', component: ServicesWebshopComponent },
  { path: 'our-works', component: OurWorksComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
