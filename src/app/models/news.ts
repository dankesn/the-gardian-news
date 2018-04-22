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
	fields: Fields; 

	
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
    this.fields = obj && obj.fields || null;
  }


}
export class Fields {
	bodyText: string; 

  	 constructor(obj?: any) {
    this.bodyText = obj && obj.bodyText || "";

  }
}
