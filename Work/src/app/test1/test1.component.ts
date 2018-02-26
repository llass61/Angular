import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Form } from '../Form';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnDestroy {

  constructor(private myService: MyServiceService) {}

  isActive: boolean = false;
  title = 'app';

  myData: Form[];

  loadData(data: Form[])
  {
    this.myData = data;
    console.log("loading data");
  }

  dataRefresh()
  {
    this.myService.myServiceSub().subscribe( data => this.loadData(data) );
  }

  ngOnInit()
  {
    this.myService.myServiceSub().subscribe( data => this.loadData(data) );
  }

  ngOnDestroy()
  {
    console.log("app component destroyed");
  }

}
