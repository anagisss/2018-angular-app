import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepPhoneComponent } from './components/step-phone/step-phone.component';
import { StepUserInfoComponent } from './components/step-user-info/step-user-info.component';
import { StepDateTimeComponent } from './components/step-date-time/step-date-time.component';
import { StepResultComponent } from './components/step-result/step-result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'step-1' },
  { path: 'step-1', component: StepPhoneComponent },
  { path: 'step-2', component: StepUserInfoComponent },
  { path: 'step-3', component: StepDateTimeComponent },
  { path: 'step-4', component: StepResultComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
