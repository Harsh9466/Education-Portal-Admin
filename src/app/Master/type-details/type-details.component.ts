import { TypeDetailsService } from './../../Services/Type-Details/type-details.service';
import { TypeDetails } from './../../Interface/type-details';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
TypeDetails:TypeDetails[];
TypeDetail:TypeDetails;
actionId:number;

  constructor(private typeDetailService:TypeDetailsService) { }

  ngOnInit(): void {
    this.EmptyData();
    this.getTypeDetails();
  }
  EmptyData(){
    this.TypeDetail={
      mtdId:null,
      mtdSerialNo:null,
      mtdName:'',
      mtdParentId:null,			
      mtdIsActive:false
    }
  }

  getTypeDetails(){
    this.typeDetailService.getMasterTypeDetails().subscribe
    (
      (res) =>{
        this.TypeDetails=res; 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type Details !");
    })
  }

  getTypeDetail(id:number){
    this.typeDetailService.getMasterTypeDetailsById(id).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type Details !");
    })
  }

  insertTypeDetails(data:NgForm)
  {
    let parseData={
      mtdSerialNo:parseInt(data.value.mtdSerialNo),
      mtdName:data.value.mtdName,
      mtdParentId:parseInt(data.value.mtdParentId),			
      mtdIsActive:data.value.mtdIsActive
    }
    console.log("Post Data : ",parseData);
    // this.typeDetailService.insertMasterTypeDetails(data).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //   },
    //   (error)=>{
    //     console.log("Error in Post Type Details !");
    // }
    // )
  }

  updateTypedetails(data:NgForm){
    let parseData={
      mtdSerialNo:parseInt(data.value.mtdSerialNo),
      mtdName:data.value.mtdName,
      // mtdParentId:parseInt(data.value.mtdParentId),			
      mtdIsActive:data.value.mtdIsActive
    }
    console.log("Update Data : ",parseData);
    // this.typeDetailService.updateMasterTypeDetails(this.actionId,data).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //   },
    //   (error)=>{
    //     console.log("Error in Update Type Details!");
    // })
  }

  deleteConfirm(id:number){
    this.actionId=id;
  }
  deleteTypedetails(){
    console.log("Id For Delete : ",this.actionId);
    // this.typeDetailService.deleteMasterTypeDetails(this.actionId).subscribe
    // (
    //   (res) =>{ 
    //     console.log(res);
    //   },
    //   (error)=>{
    //     console.log("Error in Delete Type Details!");
    // })
  }

}
