
import { News } from './news';

export class SearchNews {
	response: Response; 

	 constructor(obj?: any) {
    this.response =  this.response = obj && obj.response || null;
  }
}

export class Response {
	status: string;
	userTier: string;
	total: number;
	startIndex: number; 
	pageSize: number; 
	currentPage: number; 
	pages: number; 
	orderBy: string; 
	results: News[]; 

	 constructor(obj?: any) {
    this.status = obj && obj.status || "";
    this.userTier = obj && obj.userTier || "";
    this.total = obj && obj.total || "";
    this.startIndex = obj && obj.startIndex || "";
    this.pageSize = obj && obj.pageSize || "";
    this.currentPage = obj && obj.currentPage || null;
    this.pages = obj && obj.pages || null;
    this.orderBy = obj && obj.orderBy || "";
    this.results = obj && obj.results.map(res =>{
      return new News(res);
    }) || [];
  }
}


