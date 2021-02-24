import { NotificationService } from './../../../_services/notification.service';
import { StreamsService } from './../../../_services/master-streams.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Delete-Stream',
  templateUrl: './Delete-Stream.component.html',
  styleUrls: ['./Delete-Stream.component.css']
})
export class DeleteStreamComponent implements OnInit {

  constructor(
    private streamsService:StreamsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
  ) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  delete(){
    // this.streamsService.delete(this.data.id).subscribe
    // (
    //   (res) => {
    //     this.notification.showNotification("Deleted Successfully !", "success");
    //   },
    //   (error) => {
    //     this.notification.showNotification("Some error occured !", "danger");
    //   }
    // );
  }

}
