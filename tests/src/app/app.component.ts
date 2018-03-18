import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { TestingService, Form } from './services/testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  isOn = false;

  child = new ChildComponent();
  //parent = new ParentComponent();

  public frm: Form;

  constructor(public svc: TestingService) { }

  clicked() { this.isOn = !this.isOn; }

  onGetForm(): void { this.svc.getData(); }

  get message() { return 'light is ' + (this.isOn ? 'On' : 'Off');  }

  ngOnInit() {
    this.svc.mydata.subscribe( data => {this.frm = data });
  }
}
