import { Location } from "./../../../_models/master-location";
import { NotificationService } from "./../../../_services/notification.service";
import { LocationService } from "./../../../_services/master-location.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-Update-Location",
  templateUrl: "./Update-Location.component.html",
  styleUrls: ["./Update-Location.component.css"],
})
export class UpdateLocationComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public getData: any,
    private locationService: LocationService,
    private notification: NotificationService
  ) {}

  isState: boolean = false;
  isCity: boolean = false;
  countryData:Location[]=this.getData.countries;
  stateData:Location[];
  parentId=this.getData.data.mLocationParentId;
  id=this.getData.data.mLocationId;
  countryId=0;

  locationData: Partial<Location> = {
    mLocationId: null,
    mLocationName: null,
    mLocationCode: null,
    mLocationPinCode: null,
    mLocationType: null,
    mLocationIsActive: false,
  };

  ngOnInit() {
    console.log("Parent Id : ",this.parentId);
    console.log("Id : ",this.id);
    this.getStates(this.parentId);
    this.locationData=this.getData.data;
   
    if((this.getData.data.mLocationType).toLowerCase() =='country')
    {
      this.locationData.mLocationPinCode=0
      this.isState=false;
      this.isCity=false;
    }
    if((this.getData.data.mLocationType).toLowerCase() =='state')
    {
      this.locationData.mLocationPinCode=0
      this.isState=true;
      this.isCity=false;
    }
    if((this.getData.data.mLocationType).toLowerCase() =='city')
    {
      this.isState=true;
      this.isCity=true;
    }
  }

  onChangeCountry(countryId:Event){
    this.locationData.mLocationParentId = +countryId;   
    this.getStates(+countryId);
  }

  onChangeState(stateId:Event){
    this.locationData.mLocationParentId = +stateId;
  }

  getStates(id:number){
    this.locationService.getMasterLocationTypeParentIdGet("state",id).subscribe((res)=>{
      this.countryId=res[0].mLocationParentId;
    },(error)=>{
      this.notification.showNotification("Problem On Retriving Data!","error")
    }
    )
  }
  getCountries(id:number){
    this.locationService.getMasterLocationTypeParentIdGet("country",id).subscribe((res)=>{
      this.stateData=res;
    },(error)=>{
      this.notification.showNotification("Problem On Retriving Data!","error")
    }
    )
  }
  

  update() {
    console.log(this.locationData);
    // this.locationService.updateMasterLocation(this.getData.id, this.locationData).subscribe
    // (
    //   (res: Location) => {
    //     this.notification.showNotification("Data Updated successfully","success"
    //     );
    //   },
    //   (error) => {
    //     this.notification.showNotification("Some error occured ! ", "danger");
    //   });
  }
}
