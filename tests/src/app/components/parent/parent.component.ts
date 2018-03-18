import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: '<p>HI</p>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {  

  }

  ngOnInit() {
  }

}
