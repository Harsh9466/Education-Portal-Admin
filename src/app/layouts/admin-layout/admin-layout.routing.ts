import { Routes } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { TypeComponent } from './../../Master/type/type.component';
import { StreamsComponent } from './../../Master/streams/streams.component';
import { TypeDetailsComponent } from './../../Master/type-details/type-details.component';
import { LocationComponent } from './../../Master/location/location.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'location',       component: LocationComponent },
    { path: 'streams',        component: StreamsComponent },
    { path: 'streams/:id',        component: StreamsComponent },
    { path: 'type',           component: TypeComponent },
    { path: 'type-details',   component: TypeDetailsComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
