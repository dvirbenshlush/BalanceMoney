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

  symbol = 'AAPL';
  price: string = '';
  articles: Article[] = []

  constructor(private newsService: NewsApiService) {
   }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(response =>{
      this.articles = response['articles'].slice(0, 5);
    })

    this.newsService.getConfig()
  }

}
