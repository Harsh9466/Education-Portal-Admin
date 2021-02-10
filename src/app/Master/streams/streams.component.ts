import { Streams } from './../../Interface/streams';
import { StreamsService } from './../../Services/Streams/streams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
Streams:Streams[];
Stream:Streams;

  constructor(private streamsService:StreamsService) { }

  ngOnInit(): void {

    this.getStreams();
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

  insertStreams(data:Streams){
    this.streamsService.insertMasterStreams(data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Post Stream !");
    }
    )
  }

  updateStreams(id:number,data:Streams){
    this.streamsService.updateMasterStreams(id,data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Update Stream !");
    })
  }

  deleteStreams(id:number){
    this.streamsService.deleteMasterStreams(id).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Delete Streams Type !");
    }
    )
  }

}
