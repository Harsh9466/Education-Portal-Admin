import { environment } from "./../../environments/environment";
import { MasterCourseStream } from "./../_models/master-course-stream";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MasterCourseStreamService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.url + "MasterCourseStream/";

  getCourseStream() {
    return this.http.get<MasterCourseStream[]>(this.baseUrl);
  }

  insertCourseStream(data: any) {
    return this.http.post(this.baseUrl, data, { responseType: "text" });
  }

  // getCourseStreamById(id:number){
  //   return this.http.get<MasterCourseStream>(this.baseUrl+id);
  // }

  // updateCourseStream(id:number,data:any){
  //   return this.http.post(this.baseUrl+id,data,{responseType:"text"});
  // }

  // deleteCourseStream(id:number){
  //   return this.http.post(this.baseUrl+id,{responseType:"text"});
  // }
}
