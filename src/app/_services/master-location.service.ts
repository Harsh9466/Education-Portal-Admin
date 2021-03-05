import { async } from "@angular/core/testing";
import { NotificationService } from "./notification.service";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Location } from "../_models/master-location";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  Locations: Location[];
  constructor(
    private http: HttpClient,
    private notification: NotificationService
  ) {}

  getMasterLocation(): any {
    let baseUrl = environment.url + "MasterLocation/GetAll/";
    this.http.get<Location[]>(baseUrl).subscribe(
      (res) => {
        this.Locations = res;
      },
      (err) => {
        this.notification.showNotification("Problem in Retriving", "danger");
      },
      () => {
        console.log(this.Locations);
      }
    );
  }

  getMasterLocationById(id: number) {
    let baseUrl = environment.url + "MasterLocation/GetById/";
    return this.http.get<Location>(baseUrl + id);
  }
  getMasterLocationTypeParentIdGet(type: string, id: number) {
    let baseUrl =
      environment.url +
      "MasterLocation/GetByTypeParentId/" +
      type +
      "/" +
      id +
      "";
    return this.http.get<Location[]>(baseUrl);
  }

  insertMasterLocation(location: any) {
    let baseUrl = environment.url + "MasterLocation/Insert/";
    return this.http.post(baseUrl, location, { responseType: "text" });
  }

  updateMasterLocation(id: number, location: any) {
    let baseUrl = environment.url + "MasterLocation/Update/";
    return this.http.put(baseUrl + id, location, { responseType: "text" });
  }

  deleteMasterLocation(id: number) {
    let baseUrl = environment.url + "MasterLocation/Delete/";
    return this.http.delete(baseUrl + id, { responseType: "text" });
  }
}
