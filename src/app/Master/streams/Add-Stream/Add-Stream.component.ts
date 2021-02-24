import { Streams } from './../../../_models/master-streams';
import { NotificationService } from './../../../_services/notification.service';
import { StreamsService } from './../../../_services/master-streams.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Stream',
  templateUrl: './Add-Stream.component.html',
  styleUrls: ['./Add-Stream.component.css']
})
export class AddStreamComponent implements OnInit {

  constructor(
    private streamsService:StreamsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification:NotificationService
    ) { }

    streamData:Partial<Streams>={
      mStreamsName:null,
      mStreamsCode:null,  
      mStreamsType:null,	 
      mStreamsSerialNo:null,
      mStreamsParentId:null,
      mStreamsIsActive:false
    }

  ngOnInit() {
  }

  add(){
    console.log(this.streamData);
    // this.streamsService.insertMasterStreams(this.streamData).subscribe
    // (
    //   (res) => {
    //     this.notification.showNotification("Added Successfully !", "success");
    //   },
    //   (error) => {
    //     this.notification.showNotification("Some error occured !", "danger");
    //   }
    // );
  }

}
