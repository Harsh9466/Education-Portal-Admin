import { NotificationService } from './notification.service';
import { Type } from '../_models/master-type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl:string= "http://demo3.kmatechnoware.com/api/MasterType/";
  
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.notification.showNotification("An error occurred : "+error.error.message+"","error");
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.notification.showNotification("Backend returned code "+error.status+"body was:"+error.error+"","error");
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
