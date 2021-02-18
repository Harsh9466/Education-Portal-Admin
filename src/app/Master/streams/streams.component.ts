import { Streams } from './../../Interface/streams';
import { StreamsService } from './../../Services/Streams/streams.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private streamsService:StreamsService) { }

  ngOnInit(): void 
  {
    this.EmptyData();
    this.getStreams();
  }

  EmptyData()
  {
    this.Stream =
    {
      mStreamsId:null,
      mStreamsCode:'',
      mStreamsName:'',
      mStreamsType:'',
      mStreamsSerialNo:null,
      mStreamsParentId:null,
      mStreamsIsActive:true
    };

    this.selectType="stream";
    this.actionId=0;
    this.StreamDropdown=false;
    this.CourseDropdown=false;
    this.substreamdropdown=false;
    this.courseId=0;
  }

  showDropdown(data)
  {
    this.getStreams();
    this.selectType=data

    if(data=="stream" || data=="Stream")
    {
      this.Stream.mStreamsParentId=0;
      this.StreamDropdown=false;
      this.CourseDropdown=false;
      this.substreamdropdown=false;
    }

    if(data=="course" || data=="Course")
    {
      this.StreamDropdown=true;
      this.CourseDropdown=false;
      this.substreamdropdown=false;
    }

    if(data=="substream" || data=="Substream")
    {
      this.StreamDropdown=true;
      this.CourseDropdown=true;
      this.substreamdropdown=true;
    }
  }

  getMainStreams(){
    this.streamsService.getMasterStreamsTypeGet("stream").subscribe
    (
      (res)=>{
        this.streamdata=res;
      },
      (error)=>{
        console.log("Error in Get Stream By Type");
      });
  }
  

  
  getCourse(){
   this.streamsService.getMasterStreamsTypeGet("course").subscribe
    (
      (res)=>{
        this.courseData=res;
      },
      (error)=>{
        console.log("Error in Get Course By Type");
      });
  }

  getNameByParentId(){
    this.streamsService.getMasterStreamsTypeGet1(this.actionId).subscribe
    (
      (res)=>{
        this.courseData=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Course By Type");
      });
  }

  getStreams()
  {
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

   toggleActionId(){
    this.actionId=this.courseId
  }


  insertStreams(data:NgForm)
  {
    let parseData={
      mStreamsCode:data.value.mStreamsCode,
      mStreamsName:data.value.mStreamsName,
      // mStreamsType:data.value.mStreamsType,
      mStreamsType:this.selectType,
      mStreamsParentId:+this.actionId,
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
        console.log("Error in Post Stream!");
    })
  }

  updateStreams(data:NgForm)
  {
    let parseData=
    {
      mStreamsId:parseInt(data.value.mStreamsId),
      mStreamsCode:data.value.mStreamsCode,
      mStreamsName:data.value.mStreamsName,
      // mStreamsType:data.value.mStreamsType,
      mStreamsType:this.selectType,
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

  deleteConfirm(id:number)
  {
    this.actionId=id
  }

  deleteStreams()
  {
    // console.log("Id For Delete : ",this.actionId)
    this.streamsService.deleteMasterStreams(this.actionId).subscribe
    (
      (res) =>{ 
        console.log(res);
        this.getStreams();
      },
      (error)=>{
        console.log("Error in Delete Streams Type !");
    })
  }

}
