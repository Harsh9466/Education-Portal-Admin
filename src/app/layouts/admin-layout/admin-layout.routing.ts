import { UrlLinkComponent } from "./../../Url/Url-Link/Url-Link.component";
import { UrlPermissionComponent } from "./../../Url/Url-Permission/Url-Permission.component";
import { UrlGroupComponent } from "./../../Url/Url-Group/Url-Group.component";
import { UrlTypeComponent } from "./../../Url/Url-Type/Url-Type.component";
import { CollegeRegistrationComponent } from "./../../College-Registration/College-Registration.component";
import { MasterStreamCourseResolver } from "./../../_resolvers/master-stream-course.resolver";
import { CourseStreamComponent } from "./../../Master/course-stream/course-stream.component";
import { MasterStreamsResolver } from "./../../_resolvers/master-stream.resolver";
import { MasterTypeResolver } from "./../../_resolvers/master-type.resolver";
import { MasterTypeDetailResolver } from "./../../_resolvers/master-type-detail.resolver";
import { CodeComponent } from "./../../Master/code/code.component";
import { BankSetupComponent } from "./../../Master/bank-setup/bank-setup.component";
import { BankComponent } from "./../../Master/bank/bank.component";
import { MasterLocationResolver } from "./../../_resolvers/master-location.resolver";
import { AuthGuard } from "./../../_guards/auth.guard";
import { Routes } from "@angular/router";

import { TypeComponent } from "./../../Master/type/type.component";
import { StreamsComponent } from "./../../Master/streams/streams.component";
import { TypeDetailsComponent } from "./../../Master/type-details/type-details.component";
import { LocationComponent } from "./../../Master/location/location.component";
import { DashboardComponent } from "../../dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: "master",
    canActivate: [AuthGuard],
    children: [
      {
        path: "location",
        canActivate: [AuthGuard],
        component: LocationComponent,
        resolve: { location: MasterLocationResolver },
      },
      {
        path: "streams",
        canActivate: [AuthGuard],
        component: StreamsComponent,
        resolve: { stream: MasterStreamsResolver },
      },
      {
        path: "course-stream",
        canActivate: [AuthGuard],
        component: CourseStreamComponent,
        resolve: { CourseStream: MasterStreamCourseResolver },
      },
      {
        path: "type",
        canActivate: [AuthGuard],
        component: TypeComponent,
        resolve: { type: MasterTypeResolver },
      },
      {
        path: "type-details",
        canActivate: [AuthGuard],
        component: TypeDetailsComponent,
        resolve: { typeDetail: MasterTypeDetailResolver },
      },
      { path: "bank", canActivate: [AuthGuard], component: BankComponent },
      {
        path: "bank-setup",
        canActivate: [AuthGuard],
        component: BankSetupComponent,
      },
      { path: "code", canActivate: [AuthGuard], component: CodeComponent },
    ],
  },
  {
    path: "url-type",
    canActivate: [AuthGuard],
    component: UrlTypeComponent,
  },
  {
    path: "url-group",
    canActivate: [AuthGuard],
    component: UrlGroupComponent,
  },
  {
    path: "url-link",
    canActivate: [AuthGuard],
    component: UrlLinkComponent,
  },
  {
    path: "url-permission",
    canActivate: [AuthGuard],
    component: UrlPermissionComponent,
  },
  {
    path: "college-registration",
    canActivate: [AuthGuard],
    component: CollegeRegistrationComponent,
  },
];
