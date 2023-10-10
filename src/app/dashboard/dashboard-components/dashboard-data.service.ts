import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * This service provides methods for fetching data from the backend API.
 * The data can be used to populate various dashboards and reports.
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  /**
   * The URL of the backend API.
   */
  private BASE_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  /**
   * Fetches the blog cards data from the backend API.
   *
   * @returns An Observable that emits the blog cards data when it is received from the API.
   */
  getBlogCardsData() {
    return this.http.get(this.BASE_URL + '/api/blogs');
  }

  /**
   * Fetches the feeds data from the backend API.
   *
   * @returns An Observable that emits the feeds data when it is received from the API.
   */
  getFeedsData() {
    return this.http.get(this.BASE_URL + '/api/feeds');
  }

  /**
   * Fetches the monthly sales data from the backend API.
   *
   * @returns An Observable that emits the monthly sales data when it is received from the API.
   */
  getMonthlySalesData() {
    return this.http.get(this.BASE_URL + '/api/monthly_sales/');
  }

  /**
   * Fetches the top customers data from the backend API.
   *
   * @returns An Observable that emits the top customers data when it is received from the API.
   */
  getTopCustomersData() {
    return this.http.get(this.BASE_URL + '/api/top_customers');
  }

  /**
   * Fetches the top cards data from the backend API.
   *
   * @returns An Observable that emits the top cards data when it is received from the API.
   */
  getTopCardsData() {
    return this.http.get(this.BASE_URL + '/api/top_cards');
  }

}