import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html'
})
export class MonthlySalesComponent implements OnInit {

  monthlySales:any;
  constructor(private dashboardDataService: DashboardDataService) {
  }
    salesChart: Chart;
  ngOnInit(): void {
    this.dashboardDataService.getMonthlySalesData()
      .subscribe(data => {
         console.log(data)
        // Convert data to array
        const dataArray = Object.values(data);
        
        // Extract labels and data  
        const labels = dataArray.map(sale => {
          return `${sale.invoice_month}/${sale.invoice_year}`;
        });
        
        const amounts = dataArray.map(sale => {
          return sale.amount; 
        });

        this.salesChart = new Chart('salesChart', {
          type: 'bar', 
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Monthly Sales',
                data: amounts
              }
            ]
          }
        });

      });
}
}
