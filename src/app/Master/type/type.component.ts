import { TypeService } from './../../Services/Type/type.service';
import { Type } from './../../Interface/type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
Types:Type[];
Type:Type;
  constructor(private typeService:TypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(){
    this.typeService.getMasterType().subscribe
    (
      (res) =>{ 
        this.Types=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Master Type!");
    })
  }

  getType(id:number){
    this.typeService.getMasterTypeById(id).subscribe
    (
      (res) =>{ 
        this.Type=res;
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type By Id!");
    })
  }

  insertType(data:Type){
    this.typeService.insertMasterType(data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Post Type!");
    })
  }

  updateType(id:number,data:Type){
    this.typeService.updateMasterType(id,data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Update Type!");
    })
  }

  deleteType(id:number){
    this.typeService.deleteMasterType(id).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Delete Type!");
    })
  }

}
