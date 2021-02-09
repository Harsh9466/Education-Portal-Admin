import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo 
{
    path: string;
    title: string;
    icon: string;
    class: string;
}
<<<<<<< HEAD
export const ROUTES: RouteInfo[] = 
[
  { path: '/master', title: 'Master',  icon:'person', class: '' },
=======
export const ROUTES: RouteInfo[] = [
  { path: '/master', title: 'Master',  icon:'person', class: ''},
>>>>>>> 5685dcaad74ce3df3808e8ca01c759ba2a1508cb
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  { path: '/typography', title: 'HRh',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}