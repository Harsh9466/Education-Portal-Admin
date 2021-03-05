import { NotificationService } from "./notification.service";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notification: NotificationService
  ) {}
  baseUrl = environment.url + "auth/login?";

  login(userDetails: any) {
    this.http
      .get(
        this.baseUrl +
          "username=" +
          userDetails.username +
          "&password=" +
          userDetails.password +
          ""
      )
      .subscribe(
        (user: any) => {
          if (user) {
            localStorage.setItem("token", user.token);
            localStorage.setItem("user", JSON.stringify(user));
            this.user = JSON.stringify(user);
            this.router.navigate(["dashboard"]);
            this.notification.showNotification(
              "Log In Successful !!",
              "success"
            );
          }
        },
        (error) => {
          this.notification.showNotification(error.error.text, "danger");
        }
      );
  }
}
