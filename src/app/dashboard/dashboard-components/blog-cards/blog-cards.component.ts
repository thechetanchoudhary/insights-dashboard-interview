import { Component, OnInit } from '@angular/core';
import { blogcard, blogcards } from './blog-cards-data';
import { DashboardDataService } from '../dashboard-data.service';

/**
 * This component displays the blog cards data.
 */
@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  /**
   * The blog cards data.
   */
  blogcards: any = [];

  constructor(private dashboardDataService: DashboardDataService) { }

  /**
   * Fetches the blog cards data from the backend API.
   */
  ngOnInit(): void {
    this.dashboardDataService.getBlogCardsData()
      .subscribe(data => {
        this.blogcards = data;
      }, error => {
        console.error(error);
        // Display a friendly error message to the user
        alert("Sorry, we're unable to connect to the server right now. Please try again later.");
      });
  }

}