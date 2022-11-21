import { Component, OnInit } from '@angular/core';
import {Product,TopCustomers} from './top-customers-data';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html'
})
export class TopCustomersComponent implements OnInit {

  topCustomers:Product[];

  constructor() {

    this.topCustomers=TopCustomers;
  }

  ngOnInit(): void {
  }

}
