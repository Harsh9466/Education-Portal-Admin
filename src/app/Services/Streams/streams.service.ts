import { Streams } from './../../Interface/Streams';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {
  baseUrl:string= "http://demo3.kmatechnoware.com/api/MasterStreams/";
  
  constructor(private http:HttpClient) { }

  getMasterStreams()
  {
    return this.http.get<Streams[]>(this.baseUrl);
  }
  getMasterStreamsById(id:number)
  {
    return this.http.get<Streams>(this.baseUrl+id);
  }

  insertMasterStreams(Streams:Streams)
  {
    return this.http.post(this.baseUrl,Streams,{responseType:"text"});    
  }

  updateMasterStreams(id:number,Streams:Streams)
  {
    return this.http.put(this.baseUrl+id,Streams,{responseType:"text"});    
  }

  deleteMasterStreams(id:number)
  {
    return this.http.delete(this.baseUrl+id,{responseType:'text'});
  }
}
