import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvLayoutComponent } from './components/cv-layout/cv-layout.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvSkillsComponent } from './components/cv-skills/cv-skills.component';
import { CvLanguagesComponent } from './components/cv-languages/cv-languages.component';
import { CvExperienceComponent } from './components/cv-experience/cv-experience.component';
import { CvEducationComponent } from './components/cv-education/cv-education.component';
import { CvSocialAccountsComponent } from './components/cv-social-accounts/cv-social-accounts.component';
import { CvAddressComponent } from './components/cv-address/cv-address.component';


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
