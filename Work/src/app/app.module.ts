import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { ParentComponent } from './parent/parent.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { DialogComponent } from './dialog/dialog.component';

const appRoutes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    SubjectsComponent,
    DialogComponent
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
