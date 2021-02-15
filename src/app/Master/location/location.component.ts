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
selectType:string;
countryDropdown:boolean=false;
stateDropdown:boolean=false;
pinCodedropdown:boolean=false;
pinCode:number;
actionId:number=0;
stateId:number=0;

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
  this.pinCodedropdown=false;
  this.pinCode=0;
  this.stateId=0;
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
        this.showDropdown(this.Location.mLocationType);
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Location By Id!");
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

  getNameByParentId(){
    this.locationService.getMasterLocationTypeGet1(this.actionId).subscribe
    (
      (res)=>{
        this.stateData=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Location By Type");
      });
  }

  showDropdown(data){
    this.getCountries();
    this.selectType=data
    if(data=="country" || data=="Country"){
      this.Location.mLocationParentId=0;
      this.Location.mLocationPinCode=0;
      this.actionId=0
      this.pinCodedropdown=false;
      this.countryDropdown=false;
      this.stateDropdown=false;
    }
    if(data=="state" || data=="State"){
      this.Location.mLocationPinCode=0;
      this.pinCodedropdown=false;
      this.countryDropdown=true;
      this.stateDropdown=false;
    }
    if(data=="city" || data=="City"){
      this.countryDropdown=true;
      this.stateDropdown=true;
      this.pinCodedropdown=true;
    }
  }
  
  toggleActionId(){
    this.actionId=this.stateId
  }

  insertLocation(data:NgForm){
    var parseData={
      mLocationCode:data.value.mLocationCode,
      mLocationName:data.value.mLocationName,
      mLocationPinCode:+this.pinCode,
      mLocationType:this.selectType,
      mLocationParentId:+this.actionId,
      mLocationIsActive:data.value.mLocationIsActive,
    }
    console.log(parseData);
    this.locationService.insertMasterLocation(parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getLocations();
      },
      (error)=>{
        console.log("Error in Post Location !");
    }); 
    this.EmptyData();
  }

  updateLocation(data:NgForm){
      var parseData={
        mLocationId:data.value.mLocationId,
        mLocationCode:data.value.mLocationCode,
        mLocationName:data.value.mLocationName,
        mLocationPinCode:+this.pinCode,
        mLocationType:this.selectType,
        // mLocationParentId:+this.actionId,
        mLocationIsActive:data.value.mLocationIsActive,
      }
      console.log(parseData);
    // this.locationService.updateMasterLocation(parseData.mLocationId,parseData).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //     this.getLocations();
    //   },
    //   (error)=>{
    //     console.log("Error in Update Location !");
    // })
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
