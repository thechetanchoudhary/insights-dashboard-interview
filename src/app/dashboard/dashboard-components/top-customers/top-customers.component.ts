import { Component, OnInit } from '@angular/core';
import { Product, TopCustomers } from './top-customers-data';
import { DashboardDataService } from '../dashboard-data.service';

/**
 * This component displays the top customers data.
 */
@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html'
})
export class TopCustomersComponent implements OnInit {

  /**
   * The top customers data.
   */
  topCustomers: any;

  constructor(private dashboardDataService: DashboardDataService) { }

  /**
   * Fetches the top customers data from the backend API.
   */
  ngOnInit(): void {
    this.dashboardDataService.getTopCustomersData()
      .subscribe(data => {
        this.topCustomers = data;
      });
  }

}