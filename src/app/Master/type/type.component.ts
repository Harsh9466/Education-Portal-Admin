import { TypeService } from '../../_services/master-type.service';
import { Type } from '../../_models/master-type';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
Types:Type[];
Type:Type;
actionId:number;
  constructor(private typeService:TypeService) { }

  ngOnInit(): void {
    this.EmptyData();
    this.getTypes();
  }

  EmptyData(){
    this.Type={
      mTypeId:null,
      mTypeName:'',
      mTypeCourseType:'',
      mTypeProgramType:'',
      mTypeSerialNo:null,
      mTypeTypeOfCollege:'',
      mTypeIsActive:false
    }
  }

  getTypes(){
    this.typeService.getMasterType().subscribe
    (
      (res) =>{ 
        this.Types=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Master Type!");
    })
  }

  getType(id:number){
    this.typeService.getMasterTypeById(id).subscribe
    (
      (res) =>{ 
        this.Type=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type By Id!");
    })
  }

  insertType(data:NgForm){
    let parseData={
      mTypeName:data.value.mTypeName,
      mTypeCourseType:data.value.mTypeCourseType,
      mTypeProgramType:data.value.mTypeProgramType,
      mTypeSerialNo:parseInt(data.value.mTypeSerialNo),
      mTypeTypeOfCollege:data.value.mTypeTypeOfCollege,
      mTypeIsActive:data.value.mTypeIsActive
    }
    // console.log(parseData);
    this.typeService.insertMasterType(parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getTypes();
      },
      (error)=>{
        console.log("Error in Post Type!");
    })
  }

  updateType(data:NgForm){
    let parseData={
      mTypeId:parseInt(data.value.mTypeId),
      mTypeName:data.value.mTypeName,
      mTypeCourseType:data.value.mTypeCourseType,
      mTypeProgramType:data.value.mTypeProgramType,
      mTypeSerialNo:parseInt(data.value.mTypeSerialNo),
      mTypeTypeOfCollege:data.value.mTypeTypeOfCollege,
      mTypeIsActive:data.value.mTypeIsActive
    }
    // console.log(parseData);
    this.typeService.updateMasterType(parseData.mTypeId,parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getTypes();
      },
      (error)=>{
        console.log("Error in Update Type!");
    })
  }
  deleteConfirm(id:number){
    this.actionId=id;
  }
  deleteType(){
    // console.log("Id For Delete : ",this.actionId);
    this.typeService.deleteMasterType(this.actionId).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getTypes();
      },
      (error)=>{
        console.log("Error in Delete Type!");
    })
  }

}
