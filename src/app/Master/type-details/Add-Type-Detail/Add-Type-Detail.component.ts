import { TypeService } from './../../../_services/master-type.service';
import { TypeDetailsService } from './../../../_services/master-type-details.service';
import { NotificationService } from './../../../_services/notification.service';
import { TypeDetails } from './../../../_models/master-type-details';
import { Component, Inject, OnInit } from '@angular/core';
import { Type } from '../../../_models/master-type';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Type-Detail',
  templateUrl: './Add-Type-Detail.component.html',
  styleUrls: ['./Add-Type-Detail.component.css']
})
export class AddTypeDetailComponent implements OnInit {

  constructor(
    private typeDetailService:TypeDetailsService,
    private typeService:TypeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }

  typeDetailData:Partial<TypeDetails>={
    mtdName:null,
    mtdParentId:0,
    mtdTypeId:null,
    mtdIsActive:false
  }
  Types:Type[];
  streams:TypeDetails[]=this.data.streams
  courses:TypeDetails[]=this.data.courses
  isSubStream:boolean=false;
  isSpecialization:boolean=false;

  ngOnInit() {
    this.isSubStream=false;
    this.isSpecialization=false;
    if(this.data.type=='stream'){
      this.typeDetailData.mtdTypeId=1;
    }
    if(this.data.type=='substream'){
      this.typeDetailData.mtdTypeId=2;
      this.isSubStream=true;
    }
    if(this.data.type=='course'){
      this.typeDetailData.mtdTypeId=11;
    }
    if(this.data.type=='specialization'){
      this.typeDetailData.mtdTypeId=13;
      this.isSpecialization=true;
    }
  }

  OnChangeSubStream(id:number){
    this.typeDetailData.mtdParentId=id;
  }
  OnChangeSpecialization(id:number){
    this.typeDetailData.mtdParentId=+id;
  }

  add(){
    this.typeDetailService.insertMasterTypeDetails(this.typeDetailData).subscribe(
      (res) => {
        this.notification.showNotification("Added Successfully !", "success");
      },
      (error) => {
        this.notification.showNotification("Some error occured !", "danger");
      }
    );
  }

}
