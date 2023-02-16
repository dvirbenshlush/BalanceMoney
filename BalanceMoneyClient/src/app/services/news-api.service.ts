import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // apiURL = 'https://newsapi.org/v2/top-headline' //05e847a78c6046229c1438405bc3abe7';
  // apiKey: string = '05e847a78c6046229c1438405bc3abe7';
  
  // apiURL = 'https://www.alphavantage.co/query' //05e847a78c6046229c1438405bc3abe7';
  // apiKey: string = '1K9BFZMKP2QZ482P';
  private apiKey = '1K9BFZMKP2QZ482P';
  private apiUrl = 'https://www.alphavantage.co/query';
  constructor(private http: HttpClient,) { }

  ngOnInit(){
    this.getConfig().subscribe(key => {
      this.apiKey = key
      console.log('this.apiKey ', this.apiKey)
    });
  }

  getConfig(): Observable<any> {
    return this.http.get<any>('assets/configuration.json' )
  }

  getNews(): Observable<any> {
    const apiKey = '05e847a78c6046229c1438405bc3abe7'; // Replace with your News API key
    const url = `https://newsapi.org/v2/top-headlines?country=il&category=business&apiKey=${apiKey}`;
  
    return this.http.get(url);
  }

  getActivePrice(symbol:string): Observable<any> {
    let params = new HttpParams({fromObject: 
      {
        function:'TIME_SERIES_INTRADAY',
        symbol:'IBM',
        interval:'5min',
        apikey: this.apiKey
      }
    })
    const url = `${this.apiUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get(url);
   }

   getPrice(symbol:string): Observable<any> {
    let params = new HttpParams({fromObject: 
      {
        function:'TIME_SERIES_INTRADAY',
        symbol:'IBM',
        interval:'5min',
        apikey: this.apiKey
      }
    })
    const url = `${this.apiUrl}?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get(url);
   }
}
