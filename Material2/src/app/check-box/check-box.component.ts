import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  isChecked = true;
  constructor() { }

  onChange($event)
  {
    console.log($event);
    this.isChecked = !this.isChecked;
  }
  ngOnInit() {
  }

}
