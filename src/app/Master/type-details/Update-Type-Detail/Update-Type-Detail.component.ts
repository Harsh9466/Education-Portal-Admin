import { NotificationService } from './../../../_services/notification.service';
import { TypeDetailsService } from './../../../_services/master-type-details.service';
import { TypeDetails } from './../../../_models/master-type-details';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Update-Type-Detail',
  templateUrl: './Update-Type-Detail.component.html',
  styleUrls: ['./Update-Type-Detail.component.css']
})
export class UpdateTypeDetailComponent implements OnInit {

  constructor(
    private typeDetailService:TypeDetailsService,
    private notification:NotificationService,
    @Inject(MAT_DIALOG_DATA) public DialogData: any,
  ) { }
  typeDetailData:Partial<TypeDetails>={
    mtdName:null,
    mtdParentId:null,
    mtdSrNo:null,
    mtdIsActive:false
  }

  ngOnInit() {
    this.typeDetailData=this.DialogData.typeDetail;
  }

  update(){
    this.typeDetailService.updateMasterTypeDetails(this.DialogData.id,this.typeDetailData).subscribe(
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
