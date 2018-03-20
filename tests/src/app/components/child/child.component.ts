import { Component, OnInit } from '@angular/core';
import { TestingService, Form } from '../../services/testing.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  form: Form;

  constructor(private service: TestingService) { }

  ngOnInit() {
    this.service.mydata.subscribe( data => this.form = data );
  }

}
