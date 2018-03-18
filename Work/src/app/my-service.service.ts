import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Form } from './Form';

@Injectable()
export class MyServiceService implements OnInit {

  private _url: string = "../assets/data.json";

  // subjects
  _login = new Subject<boolean>();
  login = this._login.asObservable();

  val = true;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void
  {
    this._http.get(this._url).subscribe(
              data => this._login.next(this.val));
  }

  toggleLogin(): void
  {
    this._login.next(this.val);
  }
}
