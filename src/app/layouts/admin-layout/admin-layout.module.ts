import { CollegeRegistrationComponent } from "./../../College-Registration/College-Registration.component";
import { CourseStreamComponent } from "./../../Master/course-stream/course-stream.component";
import { MasterStreamsResolver } from "./../../_resolvers/master-stream.resolver";
import { MasterBankService } from "./../../_services/master-bank.service";
import { MasterTypeDetailResolver } from "./../../_resolvers/master-type-detail.resolver";
import { UpdateCodeComponent } from "./../../Master/code/Update-Code/Update-Component.component";
import { DeleteCodeComponent } from "./../../Master/code/Delete-Code/Delete-Code.component";
import { AddCodeComponent } from "./../../Master/code/Add-Code/Add-Code.component";
import { DeleteBankSetupComponent } from "./../../Master/bank-setup/Delete-Bank-Setup/Delete-Bank-Setup.component";
import { UpdateBankSetupComponent } from "./../../Master/bank-setup/Update-Bank-Setup/Update-Bank-Setup.component";
import { AddBankSetupComponent } from "./../../Master/bank-setup/Add-Bank-Setup/Add-Bank-Setup.component";
import { UpdateBankComponent } from "./../../Master/bank/Update-Bank/Update-Bank.component";
import { DeleteBankComponent } from "./../../Master/bank/Delete-Bank/Delete-Bank.component";
import { AddBankComponent } from "./../../Master/bank/Add-Bank/Add-Bank.component";
import { UpdateTypeDetailComponent } from "./../../Master/type-details/Update-Type-Detail/Update-Type-Detail.component";
import { DeleteTypeDetailComponent } from "./../../Master/type-details/Delete-Type-Detail/Delete-Type-Detail.component";
import { AddTypeDetailComponent } from "./../../Master/type-details/Add-Type-Detail/Add-Type-Detail.component";
import { UpdateTypeComponent } from "./../../Master/type/Update-Type/Update-Type.component";
import { DeleteTypeComponent } from "./../../Master/type/Delete-Type/Delete-Type.component";
import { AddTypeComponent } from "./../../Master/type/Add-Type/Add-Type.component";
import { UpdateStreamComponent } from "./../../Master/streams/Update-Stream/Update-Stream.component";
import { DeleteStreamComponent } from "./../../Master/streams/Delete-Stream/Delete-Stream.component";
import { AddStreamComponent } from "./../../Master/streams/Add-Stream/Add-Stream.component";
import { AddLocationComponent } from "./../../Master/location/Add-Location/Add-Location.component";

import { DeleteLocationComponent } from "./../../Master/location/Delete-Location/Delete-Location.component";
import { UpdateLocationComponent } from "./../../Master/location/Update-Location/Update-Location.component";
import { CodeComponent } from "./../../Master/code/code.component";
import { BankSetupComponent } from "./../../Master/bank-setup/bank-setup.component";
import { BankComponent } from "./../../Master/bank/bank.component";
import { MasterLocationResolver } from "./../../_resolvers/master-location.resolver";
import { TypeDetailsService } from "../../_services/master-type-details.service";
import { TypeService } from "../../_services/master-type.service";
import { StreamsService } from "../../_services/master-streams.service";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { TypeComponent } from "./../../Master/type/type.component";
import { TypeDetailsComponent } from "./../../Master/type-details/type-details.component";
import { StreamsComponent } from "./../../Master/streams/streams.component";
import { LocationComponent } from "./../../Master/location/location.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { LocationService } from "../../_services/master-location.service";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";

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
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
  ],
  declarations: [
    DashboardComponent,
    LocationComponent,
    AddLocationComponent,
    UpdateLocationComponent,
    DeleteLocationComponent,
    StreamsComponent,
    AddStreamComponent,
    DeleteStreamComponent,
    UpdateStreamComponent,
    TypeComponent,
    AddTypeComponent,
    DeleteTypeComponent,
    UpdateTypeComponent,
    TypeDetailsComponent,
    AddTypeDetailComponent,
    DeleteTypeDetailComponent,
    UpdateTypeDetailComponent,
    BankComponent,
    AddBankComponent,
    DeleteBankComponent,
    UpdateBankComponent,
    BankSetupComponent,
    AddBankSetupComponent,
    UpdateBankSetupComponent,
    DeleteBankSetupComponent,
    CodeComponent,
    AddCodeComponent,
    DeleteCodeComponent,
    UpdateCodeComponent,
    CourseStreamComponent,
    CollegeRegistrationComponent,
  ],
  providers: [
    LocationService,
    StreamsService,
    TypeService,
    TypeDetailsService,
    MasterBankService,
    MasterLocationResolver,
    MasterTypeDetailResolver,
    MasterStreamsResolver,
  ],
})
export class AdminLayoutModule {}
