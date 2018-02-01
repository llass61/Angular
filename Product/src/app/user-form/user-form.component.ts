import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries = ['United States', 'Singapore', 'Hong Kong', 'Australia'];
  model = new User("","","");
  submitted = false;

  constructor() { this.submitted = true; }

  ngOnInit() {
  }

}
