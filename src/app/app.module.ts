import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvLayoutComponent } from './components/cv-layout/cv-layout.component';
import { CvAddressComponent } from './components/cv-sections/cv-address/cv-address.component';
import { CvEducationComponent } from './components/cv-sections/cv-education/cv-education.component';
import { CvExperienceComponent } from './components/cv-sections/cv-experience/cv-experience.component';
import { CvLanguagesComponent } from './components/cv-sections/cv-languages/cv-languages.component';
import { CvSkillsComponent } from './components/cv-sections/cv-skills/cv-skills.component';
import { CvSocialAccountsComponent } from './components/cv-sections/cv-social-accounts/cv-social-accounts.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    CvLayoutComponent,
    ToolbarComponent,
    CvSkillsComponent,
    CvLanguagesComponent,
    CvExperienceComponent,
    CvEducationComponent,
    CvSocialAccountsComponent,
    CvAddressComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
