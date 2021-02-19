import { NotificationService } from './../../notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
import * as jq from "jquery";

declare interface RouteInfo 
{
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
  // { path: 'typography', title: 'HRh',  icon:'library_books', class: '' },
  // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router:Router,private notification:NotificationService) {

   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  showDrop()
  {
    jq("#dropdownContent").slideToggle(200);
    jq(this).toggleClass("active");
  }

  LogOut(){
    localStorage.removeItem("token");
    this.notification.showNotification("Logged Out !!","danger");
    this.router.navigate(['admin-login']);
  }
}
