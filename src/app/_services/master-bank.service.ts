import { MasterBank } from './../_models/master-bank';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterBankService {
  
  baseUrl = "http://localhost:5000/api/MasterBank/";

  constructor(private http:HttpClient) {}

  GetMasterBank(){
    return this.http.get<MasterBank[]>(this.baseUrl,{responseType:"json"});
  }
  GetMasterBankJoin(){
    return this.http.get<MasterBank[]>(this.baseUrl,{responseType:"json"});
  }

  GetMasterBankById(id:number){
    return this.http.get<MasterBank>(this.baseUrl+id,{responseType:"json"});
  }

  InsertMasterBank(data:any){
    return this.http.post(this.baseUrl,data,{responseType:'text'});
  }

  UpdateMasterBank(id:number,data:any){
    return this.http.put(this.baseUrl+id,data,{responseType:'text'});
  }

  DeleteMasterBank(id:number){
    return this.http.delete(this.baseUrl+id,{responseType:'text'}); 
  }
  

}
