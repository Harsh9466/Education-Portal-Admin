import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../Interface/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl:string= "http://demo3.kmatechnoware.com/api/masterlocation/";
  
  constructor(private http:HttpClient) { }

  getMasterLocation()
  {
    return this.http.get<Location[]>(this.baseUrl);
  }
  getMasterLocationById(id:number)
  {
    return this.http.get<Location>(this.baseUrl+id);
  }

  insertMasterLocation(location:Location)
  {
    return this.http.post(this.baseUrl,location,{responseType:"text"});    
  }

  updateMasterLocation(id:number,location:Location)
  {
    return this.http.put(this.baseUrl+id,location,{responseType:"text"});    
  }

  deleteMasterLocation(id:number)
  {
    return this.http.delete(this.baseUrl+id,{responseType:'text'});
  }
}
