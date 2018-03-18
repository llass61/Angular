import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './assign1/components/success-alert/success-alert.component';
import { WarningAlertComponent } from './assign1/components/warning-alert/warning-alert.component';
import { Assign2Component } from './assign2/components/assign2/assign2.component';
import { Assign3Component } from './assign3/components/assign3/assign3.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    Assign2Component,
    Assign3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
