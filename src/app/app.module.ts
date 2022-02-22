import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesLogoComponent } from './services-logo/services-logo.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { ServiceYourJobComponent } from './service-your-job/service-your-job.component';
import { ServicesWebsiteComponent } from './services-website/services-website.component';
import { ServicesWebshopComponent } from './services-webshop/services-webshop.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OurWorksComponent,
    MainComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    ServicesLogoComponent,
    HeroComponent,
    CardComponent,
    ServiceYourJobComponent,
    ServicesWebsiteComponent,
    ServicesWebshopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
