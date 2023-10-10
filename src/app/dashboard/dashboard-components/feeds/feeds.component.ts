import { Component, OnInit } from '@angular/core';
import { Feeds, Feed } from './feeds-data';
import { DashboardDataService } from '../dashboard-data.service';

/**
 * This component displays the feeds data.
 */
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {

  /**
   * The feeds data.
   */
  feeds: any = [];

  /**
   * Indicates whether the feeds are currently loading.
   */
  loading = false;

  /**
   * An error message, if there is one.
   */
  error = null;

  /**
   * Indicates whether there are no feeds.
   */
  noFeeds = false;

  constructor(private feedsService: DashboardDataService) {}

  /**
   * Fetches the feeds data from the backend API.
   */
  ngOnInit() {
    this.loadFeeds();
  }

  /**
   * Loads the feeds data.
   */
  loadFeeds() {
    this.loading = true;

    this.feedsService.getFeedsData()
      .subscribe({
        next: (data: any) => {
          this.loading = false;

          if (!data || data.length == 0) {
            // no feeds logic
            this.noFeeds = true;
          } else {
            this.feeds = data;
          }
        },
        error: (error: null) => {
          this.loading = false;
          this.error = error;

          // retry after 5 seconds
          setTimeout(() => this.loadFeeds(), 5000);
        }
      });
  }

}
