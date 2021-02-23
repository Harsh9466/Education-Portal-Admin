import { TypeDetails } from '../_models/master-type-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeDetailsService {
  baseUrl:string= "http://demo3.kmatechnoware.com/api/MasterTypeDetails/";
  
  constructor(private http:HttpClient) { }

  getMasterTypeDetails()
  {
    return this.http.get<TypeDetails[]>(this.baseUrl);
  }
  getMasterTypeDetailsById(id:number)
  {
    return this.http.get<TypeDetails>(this.baseUrl+id);
  }

  insertMasterTypeDetails(TypeDetails:any)
  {
    return this.http.post(this.baseUrl,TypeDetails,{responseType:"text"});    
  }

  updateMasterTypeDetails(id:number,TypeDetails:any)
  {
    return this.http.put(this.baseUrl+id,TypeDetails,{responseType:"text"});    
  }

  deleteMasterTypeDetails(id:number)
  {
    return this.http.delete(this.baseUrl+id,{responseType:'text'});
  }
}
