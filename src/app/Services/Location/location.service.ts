import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../Interface/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  
  constructor(private http:HttpClient) { }

  getMasterLocation()
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/GetAll/";
    return this.http.get<Location[]>(baseUrl);
  }
  getMasterLocationById(id:number)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/GetById/";
    return this.http.get<Location>(baseUrl+id);
  }
  getMasterLocationTypeGet(type:string)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/TypeGet/";
    return this.http.get<Location[]>(baseUrl+type);
  }

  insertMasterLocation(location:any)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/Insert/";
    return this.http.post(baseUrl,location,{responseType:"text"});    
  }

  updateMasterLocation(id:number,location:any)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/Update/";
    return this.http.put(baseUrl+id,location,{responseType:"text"});    
  }

  deleteMasterLocation(id:number)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterLocation/Delete/";
    return this.http.delete(baseUrl+id,{responseType:'text'});
  }
}
