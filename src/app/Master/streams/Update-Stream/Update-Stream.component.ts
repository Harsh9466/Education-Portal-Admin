import { NotificationService } from './../../../_services/notification.service';
import { StreamsService } from './../../../_services/master-streams.service';
import { Streams } from './../../../_models/master-streams';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Update-Stream',
  templateUrl: './Update-Stream.component.html',
  styleUrls: ['./Update-Stream.component.css']
})
export class UpdateStreamComponent implements OnInit {

  constructor(
    private streamsService:StreamsService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private notification:NotificationService
  ) { }

  streamData:Partial<Streams>={
    mStreamsId:null,
    mStreamsName:null,
    mStreamsCode:null,  
    mStreamsType:null,	 
    mStreamsSerialNo:null,
    mStreamsParentId:null,
    mStreamsIsActive:false
  }

  ngOnInit() {
    this.streamData=this.dialogData.stream;
    console.log(this.dialogData.stream);
  }

  update(){
    // this.streamsService.updateMasterStreams(this.dialogData.id,this.streamData).subscribe
    // (
    //   (res) => {
    //     this.notification.showNotification("Updated Successfully !", "success");
    //   },
    //   (error) => {
    //     this.notification.showNotification("Some error occured !", "danger");
    //   }
    // );
  }

}
