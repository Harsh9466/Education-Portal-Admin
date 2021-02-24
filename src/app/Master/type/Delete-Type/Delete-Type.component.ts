import { NotificationService } from './../../../_services/notification.service';
import { TypeService } from './../../../_services/master-type.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Delete-Type',
  templateUrl: './Delete-Type.component.html',
  styleUrls: ['./Delete-Type.component.css']
})
export class DeleteTypeComponent implements OnInit {

  constructor(
    private typeService:TypeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  delete(){
    this.typeService.deleteMasterType(this.data.id).subscribe
    (
      (res) =>{ 
        this.notification.showNotification("Data deleted successfully!","success")
      },
      (error)=>{
        this.notification.showNotification("Some error occured ! ","danger")
    });
  }
  
}
