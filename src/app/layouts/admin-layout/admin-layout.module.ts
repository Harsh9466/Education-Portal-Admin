import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypeComponent } from './../../Master/type/type.component';
import { TypeDetailsComponent } from './../../Master/type-details/type-details.component';
import { StreamsComponent } from './../../Master/streams/streams.component';
import { LocationComponent } from './../../Master/location/location.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { AdminLayoutRoutes } from './admin-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSliderModule,
    MatMenuModule
    
    
  ],
  declarations: [
    DashboardComponent,
    LocationComponent,
    StreamsComponent,
    TypeComponent,
    TypeDetailsComponent
  ]
})

export class AdminLayoutModule {}
