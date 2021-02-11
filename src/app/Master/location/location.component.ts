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
actionId:number;
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.EmptyData();
    this.getLocations();
  }
 EmptyData(){
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
 }
  getLocations(){
    this.locationService.getMasterLocation().subscribe
    (
      (res) =>{ 
        this.Locations=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Locations!");
    });
  }

  getLocation(id:number){
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

  updateLocation(data:NgForm){
    var parseData={
        mLocationId:data.value.mLocationId,
        mLocationCode:data.value.mLocationCode,
        mLocationName:data.value.mLocationName,
        mLocationPinCode:parseInt(data.value.mLocationPinCode),
        mLocationType:data.value.mLocationType,
        mLocationIsActive:data.value.mLocationIsActive,
      }
    this.locationService.updateMasterLocation(parseData.mLocationId,parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
      },
      (error)=>{
        console.log("Error in Update Location !");
    })
  }

  deleteConfirm(id:number){
    this.actionId=id;
  }

  deleteLocation()
  {
    this.locationService.deleteMasterLocation(this.actionId).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
      },
      (error)=>{
        console.log("Error in Delete Location !");
    })
  }



}
