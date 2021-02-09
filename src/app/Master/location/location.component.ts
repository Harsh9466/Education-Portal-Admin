import { Location } from './../../Interface/location';
import { LocationService } from './../../Services/Location/location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
Locations:Location[];
Location:Location;
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.Location={
      mLocationId:null,
      mLocationCode:'',
      mLocationName:'',
      mLocationPinCode:null,
      mLocationType:'',
      mLocationSerialNo:null,
      mLocationParentId:null,
      mLocationIsActive:true ,
    }
    this.getLocations();
  }

  getLocations(){
    this.locationService.getMasterLocation().subscribe
    (
      (res) =>{ 
        this.Locations=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error!");
    }
    )
  }
}
