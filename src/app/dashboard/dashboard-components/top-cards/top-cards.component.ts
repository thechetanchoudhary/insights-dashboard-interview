import { Component, OnInit } from '@angular/core';
import { topcard, topcards } from './top-cards-data';
import { DashboardDataService } from '../dashboard-data.service';

/**
 * This component displays the top cards data.
 */
@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  /**
   * The top cards data.
   */
  topcards: any;

  constructor(private dashboardDataService: DashboardDataService) { }

  /**
   * Fetches the top cards data from the backend API.
   */
  ngOnInit(): void {
    this.dashboardDataService.getTopCardsData()
      .subscribe(data => {
        this.topcards = data;
      });
  }

}