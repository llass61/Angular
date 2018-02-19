import { Component, OnInit, Input } from '@angular/core';
import { ClaimForm } from '../ClaimForms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  public claimForm;

  constructor() { }

  ngOnInit() {
  }

}
