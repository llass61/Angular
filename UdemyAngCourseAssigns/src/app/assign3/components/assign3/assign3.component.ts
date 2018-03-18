import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styleUrls: ['./assign3.component.css']
})
export class Assign3Component implements OnInit {

  displayPw: boolean = false;
  toggleAttempts = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void
  {
    this.displayPw = !this.displayPw;
    this.toggleAttempts.push(
      !this.displayPw + " => " + this.displayPw +
      " " + new Date().toLocaleString());
    // this.toggleAttempts.push(this.toggleAttempts.length + 1);
    //   console.log(this.toggleAttempts);
  }

}
