import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Article } from '../../models/Article.model'
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  numbers:number[]
  symbol = 'AAPL';
  price: string = '';
  articles: Article[] = []

  constructor(private newsService: NewsApiService) {
    // this.numbers = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
    this.numbers = Array(5).fill(4); // [4,4,4,4,4]
   }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(response =>{
      this.articles = response['articles'].slice(0, 5);
      console.log('response ', this.articles)
    })

    this.newsService.getConfig()
  }

}
