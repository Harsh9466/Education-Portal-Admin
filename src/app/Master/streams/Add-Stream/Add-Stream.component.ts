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
    isCourse:boolean=false;
    isSubStream:boolean=false;

  ngOnInit() {
    if((this.data.type).toLowerCase() =="stream")
    {
      this.isCourse=false;
      this.isSubStream=false;
    }

    if((this.data.type).toLowerCase()=="course")
    {
      this.isCourse=true;
      this.isSubStream=false;
    }

    if((this.data.type).toLowerCase()=="substream")
    {
      this.isCourse=true;
      this.isSubStream=true;
    }
  }

  add(){
    console.log(this.streamData);
    this.streamsService.insertMasterStreams(this.streamData).subscribe
    (
      (res) => {
        this.notification.showNotification("Added Successfully !", "success");
      },
      (error) => {
        this.notification.showNotification("Some error occured !", "danger");
      }
    );

    // select * from (
    //   SELECT mLocationId,mLocationName,ROW_NUMBER() over (order by mLocationId asc) as RN FROM MasterLocation
    //   ) as Data where RN <=3
  }

}
