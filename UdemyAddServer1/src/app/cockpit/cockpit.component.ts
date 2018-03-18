import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  //@ViewChild(CockpitComponent) newServerContent2;

  @Output() serverCreated = new EventEmitter<{type: string, serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{type: string, serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      type: 'server',
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      type: 'blueprint',
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
  }
}
