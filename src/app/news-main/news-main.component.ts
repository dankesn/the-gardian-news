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

   myParams = {
    'orderBy': "newest",
    'showFields': 'all',
    'pageSize': 17,
    'apiKey': '57885ac9-e353-4a76-92fe-87efd38361d6',
}
	

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
  		this.updateNews(); 
  	
  	
  }
  updateNews(){
  	this.newsService.getNews(this.myParams).subscribe(response =>{
  		this.news = response.response.results; 
  	})

  }

}
