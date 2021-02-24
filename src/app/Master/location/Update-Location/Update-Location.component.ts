import { Location } from "./../../../_models/master-location";
import { NotificationService } from "./../../../_services/notification.service";
import { LocationService } from "./../../../_services/master-location.service";
import { AfterViewInit, Component, Inject, OnInit } from "@angular/core";
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
  countryData:Location[];
  stateData:Location[];
  stateId:number=this.getData.stateId;
  countryId:number=this.getData.countryId;

  locationData: Partial<Location> = {
    mLocationId: null,
    mLocationName: null,
    mLocationCode: null,
    mLocationPinCode: null,
    mLocationParentId:null,
    mLocationType: null,
    mLocationIsActive: false,
  };

  ngOnInit() {

    this.locationData=this.getData.data;
    this.countryData=this.getData.countries;
    this.getStates(this.getData.countryId);
   
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
      this.stateData=res;
    },(error)=>{
      this.notification.showNotification("Problem On Retriving Data!","danger")
    }
    )
  }

  update() {
    this.locationService.updateMasterLocation(this.getData.id, this.locationData).subscribe
    (
      (res: Location) => {
        this.notification.showNotification("Data Updated successfully","success"
        );
      },
      (error) => {
        console.log(error);
        this.notification.showNotification("Some error occured ! ", "danger");
      });
  }
}
