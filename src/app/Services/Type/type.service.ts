import { Type } from './../../Interface/type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl:string= "http://demo3.kmatechnoware.com/api/MasterType/";
  
  constructor(private http:HttpClient) { }

  getMasterType()
  {
    return this.http.get<Type[]>(this.baseUrl);
  }
  getMasterTypeById(id:number)
  {
    return this.http.get<Type>(this.baseUrl+id);
  }

  insertMasterType(Type:any)
  {
    return this.http.post(this.baseUrl,Type,{responseType:"text"});    
  }

  updateMasterType(id:number,Type:any)
  {
    return this.http.put(this.baseUrl+id,Type,{responseType:"text"});    
  }

  deleteMasterType(id:number)
  {
    return this.http.delete(this.baseUrl+id,{responseType:'text'});
  }
}
