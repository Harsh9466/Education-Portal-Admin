import { AuthGuard } from './../../auth.guard';
import { Routes } from '@angular/router';

import { TypeComponent } from './../../Master/type/type.component';
import { StreamsComponent } from './../../Master/streams/streams.component';
import { TypeDetailsComponent } from './../../Master/type-details/type-details.component';
import { LocationComponent } from './../../Master/location/location.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent },
    {path:'master',canActivate:[AuthGuard], children:[
        { path: 'location', canActivate:[AuthGuard], component: LocationComponent },
        { path: 'streams', canActivate:[AuthGuard], component: StreamsComponent },
        { path: 'type', canActivate:[AuthGuard],    component: TypeComponent },
        { path: 'type-details', canActivate:[AuthGuard], component: TypeDetailsComponent }
    ]},
];
