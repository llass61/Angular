import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  cars = [];
  constructor() { }

  ngOnInit() {
    const car1 = new Car();
    car1.setCar("aaaaaaaaaaa", "1999", "Toyota", "Red");
    const car2 = new Car();
    car2.setCar("aaaaaaaaaaa", "2000", "Toyota", "Red");
    const car3 = new Car();
    car3.setCar("aaaaaaaaaaa", "2001", "Toyota", "Red");
    const car4 = new Car();
    car4.setCar("aaaaaaaaaaa", "2002", "Toyota", "Red");
    
    this.cars = [ car1, car2, car3, car4] ;
  }

}
