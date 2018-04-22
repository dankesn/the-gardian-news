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
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set("page-size", params.pageSize && params.pageSize.toString() || '12')
          .set("page", params.page && params.page.toString() || '1')
          .set("show-fields", params.showFields && params.showFields.toString() || 'all')
          .set("api-key", params.apiKey && params.apiKey.toString() || '57885ac9-e353-4a76-92fe-87efd38361d6')
          .set("section", params.section && params.section.toString() || '')
         
      }
    }
    

  	return this.http.get(baseUrl, queryParams).map(response =>{
  			console.log(response); 
  			return new SearchNews(response); 
  	})
  }

  getInitialNews(): Observable<SearchNews>{
    return this.http.get(baseUrl + apiKey).map(response=>{
      return new SearchNews(response); 
    })
  }


  

}

