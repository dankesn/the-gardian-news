import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { News } from '../models/news'; 
import { SearchNews } from '../models/search-news'; 
import { Observable } from 'rxjs';

const apiKey = "&api-key=57885ac9-e353-4a76-92fe-87efd38361d6"; 
const baseUrl = "https://content.guardianapis.com/search?"; 

@Injectable()
export class NewsService {


  constructor(private http: HttpClient) { }

  getNews(params?: any): Observable<SearchNews>{

  	return this.http.get(baseUrl + params + apiKey).map(response =>{
  			console.log(response); 
  			return new SearchNews(response); 
  	})
  }


  

}
