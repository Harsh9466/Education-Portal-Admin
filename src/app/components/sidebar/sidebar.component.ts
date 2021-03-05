import { NotificationService } from "./../../_services/notification.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare const $: any;
import * as jq from "jquery";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit() {}
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  showDrop() {
    jq("#dropdownContent").slideToggle(200);
    jq(this).toggleClass("active");
  }

  showUrlDrop() {
    jq("#urlDropdownContent").slideToggle(200);
    jq(this).toggleClass("active");
  }

  LogOut() {
    localStorage.clear();
    this.notification.showNotification("Logged Out !!", "danger");
    this.router.navigate(["admin-login"]);
  }
}
