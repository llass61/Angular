import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Form } from '../Form';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  val = "default";
  forms;
  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.service.login.subscribe(
      data => this.forms = data);
  }

  doIt()
  {
    if (this.forms)
      this.val = this.forms[0].doc;
  }

  update(): void
  {
    this.service.toggleLogin();
  }
}
