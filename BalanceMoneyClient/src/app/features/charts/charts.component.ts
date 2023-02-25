import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js';
import { NewsApiService } from 'src/app/services/news-api.service';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit, OnInit {

  @Input() pricesStoce! : number[] 
  selected = -1;

  selectedStock!: string; // default selected option
  chart: any; // reference to the chart object
  stocks: { name: string, symbol: string }[] = [
    { name: 'Apple', symbol: 'AAPL' },
    { name: 'Tesla', symbol: 'TSLA' }
  ];  // ... rest of the component code

  updateChartData() {
    
    this.newsApiService.getPrice(this.selectedStock).subscribe(data => {
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
      this.chart.series[0].setData(this.pricesStoce);
      console.log('data from submit ', this.pricesStoce)
    });
  }
  
  onChange(event:any) {
    console.log(event)
  }  

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart('chart-container', this.chartConfig);
    console.log('change now')
  }

  dataPoint: Highcharts.XrangePointOptionsObject = {
    x: Date.UTC(2023, 1, 1),
    x2: Date.UTC(2023, 1, 7),
    y: 1,
    color: '#ff0000',
    name: 'Event',
  };
  dataArray: Highcharts.SeriesOptionsType[] = [];
  item: Highcharts.SeriesOptionsType = {
    type: 'line',
    name: 'My Series',
    data: this.pricesStoce,
  };;  
  
  chartConfig: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    accessibility: {
      point: {
        descriptionFormatter: function (p) {
          return p.series.name + ', ' + p.category + ', ' + p.y + '°F.';
        }
      }
    },
    title: {
      text: 'my stocks'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Price($) '
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 10px">{point.key} average temperature</span><br/>',
      valueSuffix: '°F'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [ this.item ]
  
  };

  


  constructor(private newsApiService: NewsApiService) {

  }


  ngOnInit(): void {
      console.log('pricesStoce ', this.pricesStoce)
      console.log('selectedStock ', this.selectedStock)
      this.item = {
        type: 'line',
        name: 'My Series',
        data: this.pricesStoce,
      };;  
      this.chartConfig.series = [ this.item ];

  }




}
