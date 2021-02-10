import { TypeDetailsService } from './../../Services/Type-Details/type-details.service';
import { TypeDetails } from './../../Interface/type-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
TypeDetails:TypeDetails[];
TypeDetail:TypeDetails;

  constructor(private typeDetailService:TypeDetailsService) { }

  ngOnInit(): void {
    this.getTypeDetails();
  }

  getTypeDetails(){
    this.typeDetailService.getMasterTypeDetails().subscribe
    (
      (res) =>{
        this.TypeDetails=res; 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type Details !");
    })
  }

  getTypeDetail(id:number){
    this.typeDetailService.getMasterTypeDetailsById(id).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Get Type Details !");
    })
  }

  insertTypeDetails(data:TypeDetails){
    this.typeDetailService.insertMasterTypeDetails(data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Post Type Details !");
    }
    )
  }
  updateTypeDetails(id:number,data:TypeDetails){
    this.typeDetailService.updateMasterTypeDetails(id,data).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Update Type Details !");
    })
  }

  deleteTypeDetails(id:number){
    this.typeDetailService.deleteMasterTypeDetails(id).subscribe
    (
      (res) =>{ 
        console.log(res);
      },
      (error)=>{
        console.log("Error in Delet Tpye Details");
    }
    )
  }

}
