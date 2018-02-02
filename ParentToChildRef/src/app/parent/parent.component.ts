import { Component, OnInit, ViewChild, AfterViewInit, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  parentMessage: string = "message from parent";
  parentMessage2: string = "message from parent";
  parentMessage3: string;

  @ViewChild(ChildComponent) child;

  constructor() { }

  receivedMsg($event)
  {
    this.parentMessage3 = $event;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.parentMessage2 = this.child.message2;
  }

}
