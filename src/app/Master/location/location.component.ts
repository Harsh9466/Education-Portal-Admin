import { Location } from './../../Interface/location';
import { LocationService } from './../../Services/Location/location.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
Locations:Location[];
Location:Location;
status:boolean;
  
to_delete_ID : number = 0;
to_update_ID : number = 0;

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

  get_id_to_delete(id:number)
  {
    this.to_delete_ID = id;
  }

  get_id_to_update(id:any)
  {
    this.locationService.getMasterLocationById(id).subscribe
    (
      (res) =>
      { 
        this.Location=res;
      },
      (error)=>
      {
        console.log("Error in Get Location!");
      });
  }

  getLocations(){
    this.locationService.getMasterLocation().subscribe
    (
      (res) =>{ 
        this.Locations=res;
        // console.log(res);
      },
      (error)=>{
        console.log("Error in Get Locations!");
    });
  }

  getLocation(id:number)
  {
    this.locationService.getMasterLocationById(id).subscribe
    (
      (res) =>{ 
        this.Location=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Location By Id!");
    });
  }

  insertLocation(data:NgForm){
    var parseData={
      mLocationCode:data.value.mLocationCode,
      mLocationName:data.value.mLocationName,
      mLocationPinCode:parseInt(data.value.mLocationPinCode),
      mLocationType:data.value.mLocationType,
      mLocationParentId:parseInt(data.value.mLocationParentId),
      mLocationIsActive:data.value.mLocationIsActive,
    }
    this.locationService.insertMasterLocation(parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
      },
      (error)=>{
        console.log("Error in Post Location !");
    }); 
    console.log(data.value)
  }

  updateLocation(id:number,data:NgForm)
  {
    // id = this.to_update_ID;
    
      // console.log(data.value.mLocationCode);
      // console.log(data.value.mLocationName);
      // console.log(parseInt(data.value.mLocationPinCode));
      // console.log(data.value.mLocationType);
      // console.log(data.value.mLocationIsActive);
    
    var parseData={
      mLocationCode:data.value.mLocationCode,
      mLocationName:data.value.mLocationName,
      mLocationPinCode:parseInt(data.value.mLocationPinCode),
      mLocationType:data.value.mLocationType,
      mLocationIsActive:data.value.mLocationIsActive,
    }
    this.locationService.updateMasterLocation(id,parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
      },
      (error)=>{
        console.log("Error in Update Location !");
    })
  }

  deleteLocation(id:number)
  {
    id = this.to_delete_ID;
    this.locationService.deleteMasterLocation(id).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
        console.log("data is deleted");
      },
      (error)=>{
        console.log("Error in Delete Location !");
    })
  }



}
