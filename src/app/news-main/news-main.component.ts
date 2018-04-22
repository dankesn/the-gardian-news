import { Component, OnInit } from '@angular/core';
import { NewsService} from '../services/news.service'; 
import { News } from '../models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gn-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
	news: News[]; 
	

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
  		this.updateNews(); 
  	
  	
  }
  updateNews(){
  	this.newsService.getInitialNews().subscribe(response =>{
  		this.news = response.response.results; 
  	})

  }

}
