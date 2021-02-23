import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    const token = localStorage.getItem("token");
    if (!token) {
      return true;
    } 
    this.router.navigate(["/dashboard"]);
    return false;
  }
  
}
