import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {

  cnt: number = 0;
  o: Observable<Object>;

  constructor() {
  }

  ngOnInit() {
  }

}
