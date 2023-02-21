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
export class ChartsComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() pricesStoce! : number[] 
  @Input() id! : string 

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
      type: 'spline',
      renderTo: 'chart-container-1' // use the id of the container element
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

  


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
      console.log('pricesStoce ', this.pricesStoce)
      this.item = {
        type: 'line',
        name: 'My Series',
        data: this.pricesStoce,
      };
      this.chartConfig.series = [ this.item ];
  }

  ngAfterViewInit(): void {
    // this.pricesStoce = this.pricesStoce.map(i => i + 2000)
    let item: Highcharts.SeriesOptionsType = {
      type: 'line',
      name: 'My Series',
      data: this.pricesStoce,
    };
    this.chartConfig.series = [item]

    Highcharts.chart(this.elementRef.nativeElement.querySelector(`#${this.id}`), this.chartConfig);
    console.log('pricesStoce after ', this.pricesStoce)
  }

  ngOnChanges(){
    Highcharts.chart('chart-container-1', this.chartConfig);
  }

}
