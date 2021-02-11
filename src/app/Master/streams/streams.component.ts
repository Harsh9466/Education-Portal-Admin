import { Streams } from './../../Interface/streams';
import { StreamsService } from './../../Services/Streams/streams.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
Streams:Streams[];
Stream:Streams;
actionId:number;

  constructor(private streamsService:StreamsService) { }

  ngOnInit(): void {
    this.EmptyData();
    this.getStreams();
  }

  EmptyData(){
    this.Stream={
      mStreamsId:null,
      mStreamsCode:"",
      mStreamsName:"",
      mStreamsType:"",
      mStreamsParentId:null,
      mStreamsSerialNo:null,
      mStreamsIsActive:true
    }
  }

  getStreams(){
    this.streamsService.getMasterStreams().subscribe
    (
      (res) =>{ 
        this.Streams=res;
      },
      (error)=>{
        console.log("Error in Get Streams !");
    });
  }

  getStream(id:number){
    this.streamsService.getMasterStreamsById(id).subscribe
    (
      (res) =>{ 
        this.Stream=res;
      },
      (error)=>{
        console.log("Error in Get Stream By Id !");
    })
  }

  insertStreams(data:NgForm){
    let parseData={
      mStreamsCode:data.value.mStreamsCode,
      mStreamsName:data.value.mStreamsName,
      mStreamsType:data.value.mStreamsType,
      mStreamsParentId:parseInt(data.value.mStreamsParentId),
      mStreamsIsActive:data.value.mStreamsIsActive
    }
    // console.log("Post Data : ",parseData);
    this.streamsService.insertMasterStreams(parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getStreams();
      },
      (error)=>{
        console.log("Error in Post Stream !");
    }
    )
  }

  updateStreams(data:NgForm){
    let parseData={
      mStreamsId:parseInt(data.value.mStreamsId),
      mStreamsCode:data.value.mStreamsCode,
      mStreamsName:data.value.mStreamsName,
      mStreamsType:data.value.mStreamsType,
      mStreamsIsActive:data.value.mStreamsIsActive
    }
    // console.log("Update Data : ",parseData);
    this.streamsService.updateMasterStreams(data.value.mStreamsId,parseData).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getStreams();
      },
      (error)=>{
        console.log("Error in Update Stream !");
    });
  }

  deleteConfirm(id:number){
    this.actionId=id
  }

  deleteStreams(){
    // console.log("Id For Delete : ",this.actionId)
    this.streamsService.deleteMasterStreams(this.actionId).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getStreams();
      },
      (error)=>{
        console.log("Error in Delete Streams Type !");
    }
    )
  }

}
