import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { ClaimForm } from '../ClaimForms';
import { FormViewComponent } from '../form-view/form-view.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  displayedColumns = ['doc', 'acct', 'formNumber', 'status'];
  claimFrms = new ClaimForm().getClaimForms();
  dataSource = new MatTableDataSource(new ClaimForm().getClaimFormsJSON());

  constructor(public snackBar: MatSnackBar,
              public dialogPop: MatDialog) { }

  formPopup(claimForm: ClaimForm)
  {
    const snackBarRef = this.snackBar.openFromComponent(FormViewComponent);
    snackBarRef.instance.claimForm = claimForm;
    // const snackBarRef = this.snackBar.open('HI');
  }

  dialogPopup(claimForm: ClaimForm)
  {
    const dialogRef = this.dialogPop.open(FormViewComponent);
    dialogRef.componentInstance.claimForm = claimForm;
  }

  ngOnInit() {
  }
}
