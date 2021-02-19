import { NotificationService } from '../../notification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private authService:AuthService,private notification:NotificationService,private router:Router) {
   }

  ngOnInit(): void {
  }

  onLogIn(){
    if(this.username=='harsh' && this.password=='harsh')
    {
      localStorage.setItem("token","test_token");
      this.notification.showNotification("Log In Successfull !!","success");
      this.router.navigate(["dashboard"]);
    }
  }
}
