import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/core/app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavMainComponent } from './modules/shared/components/nav-main/nav-main.component';
import { NewsletterComponent } from './modules/shared/components/newsletter/newsletter.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { ContactSectionComponent } from './modules/shared/components/contact-section/contact-section.component';
import { LandingPageComponent } from './modules/shared/components/landing-page/landing-page.component';
import { SectionBannerComponent } from './modules/shared/components/section-banner/section-banner.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMainComponent,
    NewsletterComponent,
    FooterComponent,
    ContactSectionComponent,
    LandingPageComponent,
    SectionBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
