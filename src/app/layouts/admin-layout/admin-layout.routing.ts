import { MasterTypeResolver } from './../../_resolvers/master-type.resolver';
import { MasterTypeDetailResolver } from './../../_resolvers/master-type-detail.resolver';
import { CodeComponent } from './../../Master/code/code.component';
import { BankSetupComponent } from './../../Master/bank-setup/bank-setup.component';
import { BankComponent } from './../../Master/bank/bank.component';
import { MasterLocationResolver } from './../../_resolvers/master-location.resolver';
import { AuthGuard } from './../../_guards/auth.guard';
import { Routes } from '@angular/router';

import { TypeComponent } from './../../Master/type/type.component';
import { StreamsComponent } from './../../Master/streams/streams.component';
import { TypeDetailsComponent } from './../../Master/type-details/type-details.component';
import { LocationComponent } from './../../Master/location/location.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent },
    {path:'master',canActivate:[AuthGuard], children:[
        { path: 'location', canActivate:[AuthGuard], component: LocationComponent,resolve:{location:MasterLocationResolver} },
        { path: 'streams', canActivate:[AuthGuard], component: StreamsComponent },
        { path: 'type', canActivate:[AuthGuard],    component: TypeComponent,resolve:{type:MasterTypeResolver} },
        { path: 'type-details', canActivate:[AuthGuard], component: TypeDetailsComponent ,resolve:{typeDetail:MasterTypeDetailResolver}},
        { path: 'bank', canActivate:[AuthGuard], component: BankComponent },
        { path: 'bank-setup', canActivate:[AuthGuard], component: BankSetupComponent },
        { path: 'code', canActivate:[AuthGuard], component: CodeComponent },
    ]}
];
