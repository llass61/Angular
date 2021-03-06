import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  claimStatusList = [
    { "doc": 11035, "acct": 23, "formNumber": 5001, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5002, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5003, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5004, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5005, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5006, "status": "pending" },
    { "doc": 11035, "acct": 23, "formNumber": 5007, "status": "pending" }
]
  title = 'app';
}
