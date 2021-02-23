import { AdminLoginGuard } from './../../login/admin-login/admn-login.guard';
import { AdminLoginComponent } from './../../login/admin-login/admin-login.component';
import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
  { path: "admin-login", component: AdminLoginComponent,canActivate:[AdminLoginGuard] }
];