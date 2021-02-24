import { NotificationService } from './../../../_services/notification.service';
import { TypeService } from './../../../_services/master-type.service';
import { Type } from './../../../_models/master-type';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Type',
  templateUrl: './Add-Type.component.html',
  styleUrls: ['./Add-Type.component.css']
})
export class AddTypeComponent implements OnInit {

  constructor(
    private typeService:TypeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }
  typeData:Partial<Type>={
    mTypeName:null,
    mTypeCourseType:null,
    mTypeProgramType:null,
    mTypeSerialNo:null,
    mTypeTypeofCollege:null,
    mTypeIsActive:false
  }
  ngOnInit() {
  }
  add(){
    this.typeService.insertMasterType(this.typeData).subscribe(
      (res) => {
        this.notification.showNotification("Added Successfully !", "success");
      },
      (error) => {
        console.log("Error in Post Location !");
        this.notification.showNotification("Some error occured !", "danger");
      }
    );
  }
}
