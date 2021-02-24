import { NotificationService } from './../../../_services/notification.service';
import { TypeDetailsService } from './../../../_services/master-type-details.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Delete-Type-Detail',
  templateUrl: './Delete-Type-Detail.component.html',
  styleUrls: ['./Delete-Type-Detail.component.css']
})
export class DeleteTypeDetailComponent implements OnInit {

  constructor(
    private typeDetailService:TypeDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }

  ngOnInit() {
  }
  delete(){
    this.typeDetailService.deleteMasterTypeDetails(this.data.id).subscribe
    (
      (res) =>{ 
        this.notification.showNotification("Data deleted successfully!","success")
      },
      (error)=>{
        this.notification.showNotification("Some error occured ! ","danger")
    });
  }
}
