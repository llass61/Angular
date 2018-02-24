import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  forms = [
    { doc: 11035, acct: 244, formNumber: 5001, status: 'pending' },
    { doc: 11035, acct: 244, formNumber: 5002, status: 'pending' },
    { doc: 11035, acct: 244, formNumber: 5003, status: 'pending' },
    { doc: 11035, acct: 244, formNumber: 5004, status: 'pending' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
