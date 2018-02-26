import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { Test1Component } from './test1/test1.component';
import { ParentComponent } from './parent/parent.component';
import { TestObservablesComponent } from './test-observables/test-observables.component';

const appRoutes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'test1', component: Test1Component },
  { path: 'observables', component: TestObservablesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ParentComponent,
    TestObservablesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
