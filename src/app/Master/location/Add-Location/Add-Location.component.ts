import { NotificationService } from "./../../../_services/notification.service";
import { LocationService } from "./../../../_services/master-location.service";
import { Location } from "./../../../_models/master-location";

import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-Add-Location",
  templateUrl: "./Add-Location.component.html",
  styleUrls: ["./Add-Location.component.css"],
})
export class AddLocationComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationService: LocationService,
    private notification: NotificationService,
    private router:Router
  ) {}

  isState: boolean = false;
  isCity: boolean = false;
  countryData:Location[]=this.data.countrydata;
  stateData:Location[];


  locationData: Partial<Location> = {
    mLocationCode: "",
    mLocationName: "",
    mLocationPinCode: null,
    mLocationType: this.data.type,
    mLocationParentId: 0,
    mLocationIsActive: false,
  };

  ngOnInit() {
    if (this.data.type == "country") {
      this.isState = false;
      this.isCity = false;
      this.locationData.mLocationPinCode=0
    }
    if (this.data.type == "state") {
      this.isState = true;
      this.isCity = false;
      this.locationData.mLocationPinCode=0
    }
    if (this.data.type == "city") {
      this.isState = true;
      this.isCity = true;
    }
  }

  
  onChangeCountry(data: Event) {
    this.locationData.mLocationParentId = +data;
    this.locationService.getMasterLocationTypeParentIdGet("state",+data).subscribe((res)=>{
      this.stateData=res;
    },(error)=>{
      this.notification.showNotification("Problem On Retriving Data!","error")
    }
    )
  }

  onChangeState(data: Event) {
    this.locationData.mLocationParentId = +data;
  }
  add() {
    this.locationService.insertMasterLocation(this.locationData).subscribe(
      (res) => {
        this.notification.showNotification("Added Successfully !", "success");
      },
      (error) => {
        console.log("Error in Post Location !");
        this.notification.showNotification("Some error occured !", "danger");
      }
    );
  }
}
