import { NotificationService } from "./../_services/notification.service";
import { LocationService } from "../_services/master-location.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Location } from "../_models/master-location";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MasterLocationResolver implements Resolve<Location[]> {
  constructor(
    private locationService: LocationService,
    private router: Router,
    private notification: NotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Location[]> {
    return this.locationService.getMasterLocation();
  }
}
