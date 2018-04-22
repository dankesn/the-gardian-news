import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../models/news';


@Component({
  selector: 'gn-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

	news: News[];
  queryParams; 
  section: string = '';
 
  constructor(private newsService: NewsService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
  	this.section = this.route.snapshot.paramMap.get('section'); 
  	this.newsService.getNews("section=" + this.section).subscribe(response =>{
  	this.news = response.response.results; 
  	})
      })

  }

}

