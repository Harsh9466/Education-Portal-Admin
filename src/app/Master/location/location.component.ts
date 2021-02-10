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
<<<<<<< HEAD
    // this.locationService.insertMasterLocation(data.value).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //   },
    //   (error)=>{
    //     console.log("Error in Post Location !");
    // }); 
    
    console.log(data.value)
=======
    var parseData={
      mLocationCode:data.value.mLocationCode,
      mLocationName:data.value.mLocationName,
      mLocationPinCode:parseInt(data.value.mLocationPinCode),
      mLocationType:data.value.mLocationType,
      mLocationParentId:parseInt(data.value.mLocationParentId),
      mLocationIsActive:true ,
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
    // console.log(data.value)
>>>>>>> 6efd886024f2bd3bca13352bd63c316770d2e966
  }

  updateLocation(id:number,data:Location){
    this.locationService.updateMasterLocation(id,data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Update Location !");
    })
  }

  deleteLocation(id:number)
  {
    this.locationService.deleteMasterLocation(id).subscribe
    (
      (res) =>{ 
        console.log(res);
        console.log("data is deleted");
      },
      (error)=>{
        console.log("Error in Delete Location !");
    })
    this.getLocations();
  }



}
