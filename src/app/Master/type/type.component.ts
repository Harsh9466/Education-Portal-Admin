import { UpdateTypeComponent } from './Update-Type/Update-Type.component';
import { AddTypeComponent } from './Add-Type/Add-Type.component';
import { NotificationService } from './../../_services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { TypeService } from '../../_services/master-type.service';
import { Type } from '../../_models/master-type';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeleteTypeComponent } from './Delete-Type/Delete-Type.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
Types:Type[];
Type:Type;
actionId:number;
  constructor(
    private typeService:TypeService,
    private _dialog:MatDialog,
    private notification:NotificationService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.Types=data["type"];
    })
  }

  getTypes(){
    this.typeService.getMasterType().subscribe
    (
      (res) =>{ 
        this.Types=res;
      },
      (error)=>{
        this.notification.showNotification("Problem On Retriving Data!","danger")
    })
  }

  getType(id:number){
    this.typeService.getMasterTypeById(id).subscribe
    (
      (res) =>{ 
        this.Type=res;
        this.updateType(res.mTypeId,res)
      },
      (error)=>{
        this.notification.showNotification("Problem On Retriving Data!","danger")
    })
  }

  addType(){
    this._dialog.open(AddTypeComponent,{
      width:"600px"
    });
    this._dialog.afterAllClosed.subscribe(() =>this.getTypes());
  }

  updateType(id:number,data:any){
    this._dialog.open(UpdateTypeComponent,{
      width:"600px",
      data:{
        id:id,
        type:data
      }
    });
    this._dialog.afterAllClosed.subscribe(() =>this.getTypes());
  }

  deleteType(id:number){
    this._dialog.open(DeleteTypeComponent,{
      width:"600px",
      data:{
        id:id
      }
    });
    this._dialog.afterAllClosed.subscribe(() =>this.getTypes());
  }

}
