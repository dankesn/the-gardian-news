import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { News } from '../models/news'; 
import { SearchNews } from '../models/search-news'; 
import { Observable } from 'rxjs';

const apiKey = "search?api-key=57885ac9-e353-4a76-92fe-87efd38361d6"; 
const baseUrl = "https://content.guardianapis.com/"; 

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<SearchNews>{
  	return this.http.get(baseUrl + apiKey).map(response =>{
  			console.log(response); 
  			return new SearchNews(response); 

  	})
  }

}
