import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  sub = new Subject<string>();
  value1: string = "default text";
  idx: number = 1;

  constructor() {
    
  }

  ngOnInit() {    
    this.sub
      .pipe(
          map(x => "string " + x)).subscribe( data => this.value1 = data);
  }

  sendIt(): void
  {
    this.sub.next("" + this.idx++);
  }

  subs(): Observable<string>
  {
    return this.sub.asObservable();
  }

}
