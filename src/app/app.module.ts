import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvLayoutComponent } from './components/cv-layout/cv-layout.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    CvLayoutComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
