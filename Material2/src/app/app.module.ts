import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatRadioModule,
        MatSelectModule, MatInputModule,
        MatGridListModule, MatTableModule,
        MatSnackBarModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FormViewComponent } from './form-view/form-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    DropDownListComponent,
    InputsComponent,
    GridListComponent,
    DataGridComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [FormViewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
