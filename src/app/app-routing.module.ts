import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

const routes: Routes = [
  { path: '', component: RegisterPatientComponent },
  { path: 'register', component: RegisterPatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
