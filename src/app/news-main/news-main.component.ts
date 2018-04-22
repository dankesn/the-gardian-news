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
	params = {
    "page": 1,
    filter: {
    section: "",
  },
 
  }




  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params =>{
  		
  		
  		this.updateNews(); 
  	})
  	
  }

  updateNews(params?: any){
  	 if(params) {
      this.params.page = params.page || this.params.page;
      this.params.filter.section = params.filter.section || this.params.filter.section;
    }
  	this.newsService.getNews().subscribe(response =>{
  		this.news = response.response.results; 


  	})

  }

}
