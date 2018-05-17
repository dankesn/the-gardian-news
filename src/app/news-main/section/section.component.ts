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

  myParams = {
    'orderBy': "newest",
    'showFields': 'all',
    'pageSize': 15,
    'apiKey': '57885ac9-e353-4a76-92fe-87efd38361d6',
    'section': ''
}

	news: News[];
  queryParams; 
  section: string = '';
 
  constructor(private newsService: NewsService,  private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.myParams);
    this.route.params.subscribe(params =>{
  	this.myParams.section = this.route.snapshot.paramMap.get('section'); 
  	this.newsService.getNews(this.myParams).subscribe(response =>{
  	this.news = response.response.results; 
  	})
      })

  }


}

