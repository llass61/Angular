import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Form } from './Form';

@Injectable()
export class MyServiceService {

  _url: string = "../assets/data.json";

  constructor(private _http: HttpClient) { }

  myServiceSub(): Observable<Form[]>
  {
    return this._http.get<Form[]>(this._url);
  }
}
