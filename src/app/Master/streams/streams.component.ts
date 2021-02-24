import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Streams } from '../../_models/master-streams';
import { NotificationService } from './../../_services/notification.service';
import { StreamsService } from '../../_services/master-streams.service';
import { AddStreamComponent } from './Add-Stream/Add-Stream.component';
import { UpdateStreamComponent } from './Update-Stream/Update-Stream.component';
import { DeleteStreamComponent } from './Delete-Stream/Delete-Stream.component';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit 
{
  Streams:Streams[];
  Stream:Streams;

  StreamDropdown:boolean=false;
  CourseDropdown:boolean=false;
  substreamdropdown:boolean=false;

  selectType:string;

  actionId:number;
  courseId:number=0;

  streamdata:Streams[];
  courseData:Streams[];

  constructor(
    private streamsService:StreamsService,
    private route:ActivatedRoute,
    private dailog:MatDialog,
    private notification:NotificationService
    ) { }

  ngOnInit(): void{
    this.route.data.subscribe((data)=>{
      this.Streams=data["stream"];
    })
  }

  addStream(type:string){
    this.dailog.open(AddStreamComponent,{
      width:'600px',
      height:'auto',
      data:{
        type:type
      }
    })
  };

  updateStream(id:number,stream:any){
    this.dailog.open(UpdateStreamComponent,{
      width:'600px',
      data:{
        id:id,
        data:stream
      }
    })
  };  

  deleteStream(id:number){
    this.dailog.open(DeleteStreamComponent,{
      width:'600px',    
      data:{
        id:id
      }
    })
  };

  getStream(id:number){
    this.streamsService.getMasterStreamsById(id).subscribe
    (
      (res) =>{ 
        this.Stream=res;
        this.updateStream(res.mStreamsId,res);
      },
      (error)=>{
        this.notification.showNotification("Some error occured !", "danger");
    })
  }

}
