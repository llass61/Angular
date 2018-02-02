import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    Say {{message}}
    <p>
    <button (click)="sendMsg()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;
  message2:string = "ViewChild message from child";

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  sendMsg() { this.messageEvent.emit("hello there")}

}
