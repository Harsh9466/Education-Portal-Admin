import { Type } from './../../../_models/master-type';
import { NotificationService } from './../../../_services/notification.service';
import { TypeService } from './../../../_services/master-type.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Update-Type',
  templateUrl: './Update-Type.component.html',
  styleUrls: ['./Update-Type.component.css']
})
export class UpdateTypeComponent implements OnInit {

  constructor(
    private typeService:TypeService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private notification:NotificationService
  ) { }
  typeData:Partial<Type>={
    mTypeId:this.dialogData.id,
    mTypeName:null,
    // mTypeCourseType:null,
    // mTypeProgramType:null,
    // mTypeSerialNo:null,
    // mTypeTypeofCollege:null,
    mTypeIsActive:false
  }
  ngOnInit() {
    this.typeData=this.dialogData.type;
  }

  update(){
    this.typeService.updateMasterType(this.dialogData.id,this.typeData).subscribe(
      (res) => {
        this.notification.showNotification("Updated Successfully !", "success");
      },
      (error) => {
        console.log("Error in Post Location !");
        this.notification.showNotification("Some error occured !", "danger");
      }
    );
  }

}
