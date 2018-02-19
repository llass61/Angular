import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton.component';
import { DatagridComponent } from './datagrid/datagrid.component';


@NgModule({
  declarations: [
    AppComponent,
    SplitbuttonComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
