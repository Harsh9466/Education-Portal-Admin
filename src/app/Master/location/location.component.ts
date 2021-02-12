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
countryData:Location[];
stateData:Location[];
selectType:string="country";
countryDropdown:boolean=false;
stateDropdown:boolean=false;
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
    mLocationIsActive:true
  };
  this.selectType="country";
  this.actionId=0;
  this.countryDropdown=false;
  this.stateDropdown=false;
  }

  getLocations(){
    this.locationService.getMasterLocation().subscribe
    (
      (res) =>{ 
        this.Locations=res;
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

  getStates(){
   this.locationService.getMasterLocationTypeGet("state").subscribe
    (
      (res)=>{
        this.stateData=res;
      },
      (error)=>{
        console.log("Error in Get Location By Type");
      });
  }
  getCountries(){
    this.locationService.getMasterLocationTypeGet("country").subscribe
    (
      (res)=>{
        this.countryData=res;
      },
      (error)=>{
        console.log("Error in Get Location By Type");
      });
  }

  getDropdown(){
    if(this.selectType==="country"){
      this.Location.mLocationParentId=0;
      this.countryDropdown=false;
      this.stateDropdown=false;
    }
    if(this.selectType==="state"){
      this.getCountries();
      this.countryDropdown=true;
      this.stateDropdown=false;
    }
    if(this.selectType==="city"){
      this.getCountries();
      this.getStates();
      this.countryDropdown=true;
      this.stateDropdown=true;
    }
  }

  insertLocation(data:NgForm){
    var parseData={
      mLocationCode:data.value.mLocationCode,
      mLocationName:data.value.mLocationName,
      mLocationPinCode:parseInt(data.value.mLocationPinCode),
      mLocationType:this.selectType,
      mLocationParentId:parseInt(data.value.mLocationParentId),
      mLocationIsActive:data.value.mLocationIsActive,
    }
    console.log(parseData);
    // this.locationService.insertMasterLocation(parseData).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //     this.getLocations();
    //   },
    //   (error)=>{
    //     console.log("Error in Post Location !");
    // }); 
    // console.log(data.value)
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
