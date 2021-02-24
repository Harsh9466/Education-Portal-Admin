import { environment } from './../../environments/environment';
import { NotificationService } from './notification.service';
import { Type } from '../_models/master-type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl:string= environment.url+"MasterType/";
  
  constructor(private http:HttpClient,private notification:NotificationService) { }

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
