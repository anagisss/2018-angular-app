import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule,
         MatCardModule,
         MatIconModule,
         MatInputModule,
         MatSelectModule,
         MatDialogModule,
         MatListModule, } from '@angular/material';

import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepPhoneComponent } from './components/step-phone/step-phone.component';
import { StepUserInfoComponent } from './components/step-user-info/step-user-info.component';
import { StepDateTimeComponent } from './components/step-date-time/step-date-time.component';
import { StepResultComponent } from './components/step-result/step-result.component';

@NgModule({
  declarations: [
    AppComponent,
    StepPhoneComponent,
    StepUserInfoComponent,
    StepDateTimeComponent,
    StepResultComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
