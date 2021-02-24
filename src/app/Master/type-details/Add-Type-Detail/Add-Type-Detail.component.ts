import { TypeDetailsService } from './../../../_services/master-type-details.service';
import { NotificationService } from './../../../_services/notification.service';
import { TypeDetails } from './../../../_models/master-type-details';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Type-Detail',
  templateUrl: './Add-Type-Detail.component.html',
  styleUrls: ['./Add-Type-Detail.component.css']
})
export class AddTypeDetailComponent implements OnInit {

  constructor(
    private typeDetailService:TypeDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }

  typeDetailData:Partial<TypeDetails>={
    mtdName:null,
    mtdParentId:null,
    mtdSerialNo:null,
    mtdIsActive:false
  }

  ngOnInit() {
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
