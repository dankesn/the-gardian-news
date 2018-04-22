import { Component, OnInit } from '@angular/core';
import { NewsService} from '../services/news.service'; 
import { News } from '../models/news';

@Component({
  selector: 'gn-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
	news: News[]; 


  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.newsService.getNews().subscribe(response =>{
  		console.log(response); 
  		this.news = response.response.results; 


  	})
  }

}
