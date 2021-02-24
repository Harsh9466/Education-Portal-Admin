import { environment } from './../../environments/environment';
import { Streams } from '../_models/master-streams';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {
  baseUrl:string= environment.url+"MasterStreams/";
  
  constructor(private http:HttpClient) { }

  getMasterStreams()
  {
    return this.http.get<Streams[]>(this.baseUrl);
  }
  getMasterStreamsById(id:number)
  {
    return this.http.get<Streams>(this.baseUrl+id);
  }

  insertMasterStreams(Streams:any)
  {
    return this.http.post(this.baseUrl,Streams,{responseType:"text"});    
  }

  updateMasterStreams(id:number,Streams:any)
  {
    return this.http.put(this.baseUrl+id,Streams,{responseType:"text"});    
  }

  deleteMasterStreams(id:number)
  {
    return this.http.delete(this.baseUrl+id,{responseType:'text'});
  }


  getMasterStreamsTypeGet(type:string)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterStreams/TypeGet/";
    return this.http.get<Streams[]>(baseUrl+type);
  }
  getMasterStreamsTypeGet1(parentId:number)
  {
    let baseUrl= "http://demo3.kmatechnoware.com/api/MasterStreams/TypeGet1/";
    return this.http.get<Streams[]>(baseUrl+parentId);
  }


}
