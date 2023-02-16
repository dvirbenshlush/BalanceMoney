import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js';
import { NewsApiService } from 'src/app/services/news-api.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pricesStoce: number[] = [];
  symbol = 'AAPL';
  price: string = '';
  dataLoaded = false;


  constructor(private newsService: NewsApiService) {
    this.newsService.getPrice(this.symbol).subscribe(data => {
      const monthlyData: number[] = [];
      const currentYear = new Date().getFullYear().toString();
      const timeSeries = data['Monthly Adjusted Time Series'];
      const currenMonth = new Date().getMonth().toString()
      for (const date in timeSeries) {
        const year = date.split('-')[0].valueOf()
        const month = date.split('-')[1].valueOf().charAt(1)
        if ((parseInt(year) == parseInt(currentYear)) || (parseInt(year) + 1 == parseInt(currentYear) && parseInt(currenMonth) <= parseInt(month))) {
          const price = parseFloat(timeSeries[date]['4. close']);
          monthlyData.push(price);
        }
      }
      this.pricesStoce = monthlyData
      console.log('Monthly price data for current year:', monthlyData);
      this.dataLoaded = true; // Set the flag to indicate that the data has been loaded

    }
    )
   }

  ngOnInit (){
        // this.newsService.getActivePrice(this.symbol).subscribe(response => console.log(response['Global Quote']['05. price']))

  }
  
}

