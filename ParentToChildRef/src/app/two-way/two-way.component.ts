import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  @Input() twoWay: string = "Two way binding";
  @Output() twoWayChange = new EventEmitter<string>();

  twMsg="two way property chg";
  constructor() { }

  ngOnInit() {
  }

  toWayProp() { this.twoWay = "Two Way Prop"}
  toWayEvt() { this.twoWayChange.emit("Two Way Event") }

}
