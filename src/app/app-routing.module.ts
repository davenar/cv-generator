import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvFormComponent } from './components/cv-form/cv-form.component';

const routes: Routes = [
  { path: 'home', component: CvFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
