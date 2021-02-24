import { ActivatedRoute } from '@angular/router';
import { NotificationService } from './../../_services/notification.service';
import { UpdateTypeDetailComponent } from './Update-Type-Detail/Update-Type-Detail.component';
import { DeleteTypeDetailComponent } from './Delete-Type-Detail/Delete-Type-Detail.component';
import { AddTypeDetailComponent } from './Add-Type-Detail/Add-Type-Detail.component';
import { MatDialog } from '@angular/material/dialog';
import { TypeDetailsService } from '../../_services/master-type-details.service';
import { TypeDetails } from '../../_models/master-type-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
TypeDetails:TypeDetails[];
TypeDetail:TypeDetails;
actionId:number;

  constructor(
    private typeDetailService:TypeDetailsService,
    private _dialog:MatDialog,
    private notification:NotificationService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.TypeDetails=data["typeDetail"];
    })
  }

  addTypeDetail(){
    this._dialog.open(AddTypeDetailComponent,{
      width:"600px",
      data:{}
    })
  }

  updateTypeDetail(id:number,data:any){
    this._dialog.open(UpdateTypeDetailComponent,{
      width:"600px",
      data:{
        id:id,
        typeDetail:data
      }
    })
  }

  deleteTypeDetail(id:number){
    this._dialog.open(DeleteTypeDetailComponent,{
      width:"600px",
      data:{
        id:id
      }
    })
  }

  getTypeDetail(id:number){
   return this.typeDetailService.getMasterTypeDetailsById(id).subscribe
    (
      (res:TypeDetails) =>{ 
        this.TypeDetail=res;
        this.updateTypeDetail(res.mtdId,res)
      },
      (error)=>{
        this.notification.showNotification("Problem On Retriving Data!","error")
    })
  }


}
