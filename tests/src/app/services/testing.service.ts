import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestingService {

  private file: string = "../../assets/forms.json";
  private idx: number = 0;
  private forms: Form[];
  mydata: BehaviorSubject<Form> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  getData(): void
  {
    this._http.get<Form[]>(this.file).subscribe( data => {
                        this.forms = data;
                        this.idx++;
                        if ( ! ( this.idx < data.length) ) this.idx = 0;
                        this.mydata.next( data[this.idx]);
    });
  }
}

export interface Form
{
  doc: number;
  acct: number;
  form: number;
}
