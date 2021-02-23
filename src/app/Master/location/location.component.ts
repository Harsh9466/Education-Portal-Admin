import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from './../../_services/notification.service';
import { LocationService } from '../../_services/master-location.service';
import { Location } from '../../_models/master-location';
import { AddLocationComponent } from './Add-Location/Add-Location.component';
import { UpdateLocationComponent } from './Update-Location/Update-Location.component';
import { DeleteLocationComponent } from './Delete-Location/Delete-Location.component';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit 
{
  Locations:Location[];
  countryData:Location[];
  stateData:Location[];
  cityData:Location[];

  constructor(private locationService:LocationService,
    private route:ActivatedRoute,
    private dailog:MatDialog,
    private notification:NotificationService
    ) { }

  ngOnInit(): void 
  {
    this.route.data.subscribe((data) =>{
      this.Locations=data["location"];
      this.countryData=this.Locations.filter((v,i)=>v.mLocationType.toLocaleLowerCase()==="country");
      this.stateData=this.Locations.filter((v,i)=>v.mLocationType.toLocaleLowerCase()==="state");
      this.cityData=this.Locations.filter((v,i)=>v.mLocationType.toLocaleLowerCase()==="city");
    });
  }

  

  getLocation(id:number) {
    this.locationService.getMasterLocationById(id).subscribe(
      (res: Location) => {
          this.updateLocation(id,res);
      },
      (error) => {
        this.notification.showNotification("Problem On Retriving Data !","danger");
      }
    );
  }


  addLocation(type:string){
    this.dailog.open(AddLocationComponent,{
      width:'600px',
      height:'auto',
      data:{
        type:type,
        countrydata:this.countryData
      }
    })
  };

  updateLocation(id:number,data:any){
    this.dailog.open(UpdateLocationComponent,{
      width:'600px',
      data:{
        id:id,
        data:data,
        countries:this.countryData
      }
    })
  };

  deleteLocation(id:number){
    this.dailog.open(DeleteLocationComponent,{
      width:'600px',    
      data:{
        id:id
      }
    })
  };

}
