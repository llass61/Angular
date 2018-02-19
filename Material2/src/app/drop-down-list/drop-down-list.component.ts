import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit {

  color = 2;

  colors = [
    { id: 1, name: 'Red'},
    { id: 1, name: 'Green'},
    { id: 1, name: 'Blue'}
   ];

  constructor() { }

  ngOnInit() {
  }

}
