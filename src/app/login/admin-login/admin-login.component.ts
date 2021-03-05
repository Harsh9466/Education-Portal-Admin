import { NotificationService } from "../../_services/notification.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  userDetails: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogIn() {
    this.authService.login(this.userDetails);
  }
}
