import { TypeDetails } from "./../_models/master-type-details";
import { TypeDetailsService } from "./../_services/master-type-details.service";
import { NotificationService } from "../_services/notification.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MasterStreamCourseResolver implements Resolve<TypeDetails> {
  constructor(
    private typeDetailService: TypeDetailsService,
    private router: Router,
    private notification: NotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TypeDetails> {
    return this.typeDetailService.getMasterTypeDetails().pipe(
      catchError((err) => {
        this.notification.showNotification(
          "Problem on retriving data!",
          "danger"
        );
        this.router.navigate(["/dashboard"]);
        return of(null);
      })
    );
  }
}
