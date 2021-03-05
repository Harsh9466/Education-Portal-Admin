import { MasterProfile } from "./../_models/master-profile";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MasterProfileService {
  baseUrl = environment.url + "MasterProfile/";

  constructor(private http: HttpClient) {}

  getProfiles() {
    return this.http.get<MasterProfile[]>(this.baseUrl);
  }

  getProfileById() {
    return this.http.get<MasterProfile>(this.baseUrl);
  }

  insertProfile(data: any) {
    return this.http.post(this.baseUrl, data, {
      responseType: "text",
    });
  }

  updateProfile(profile: MasterProfile) {
    return this.http.put(this.baseUrl, profile, {
      responseType: "text",
    });
  }

  deleteProfile(id: number) {
    return this.http.delete(this.baseUrl + id, {
      responseType: "text",
    });
  }
}
