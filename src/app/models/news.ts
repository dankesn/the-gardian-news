export class News {
	id: string; 
	type: string;
	sectionId: string;
	sectionName: string; 
	webPublicationDate: string;
	webTitle: string;
	webUrl: string;
	apiUrl: string;
	isHosted: boolean; 

	
	 constructor(obj?: any) {
    this.id = obj && obj.id || "";
    this.type = obj && obj.type || "";
    this.sectionId = obj && obj.sectionId || "";
    this.sectionName = obj &&  obj.sectionName || [];
    this.webPublicationDate = obj && obj.webPublicationDate || "";
    this.webTitle = obj && obj.webTitle || "";
    this.webUrl = obj && obj.webUrl || "";
    this.apiUrl = obj &&  obj.apiUrl || "";
    this.isHosted = obj && obj.isHosted || null;
  }






}