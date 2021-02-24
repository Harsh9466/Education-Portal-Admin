import { MasterBankService } from './../../../_services/master-bank.service';
import { NotificationService } from './../../../_services/notification.service';
import { MasterBank } from './../../../_models/master-bank';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Add-Bank',
  templateUrl: './Add-Bank.component.html',
  styleUrls: ['./Add-Bank.component.css']
})
export class AddBankComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterBankService: MasterBankService,
    private notification: NotificationService
  ) { }

  bankData:Partial<MasterBank>={
    mbCodeId:null,
    mbBankId:null,
    mbAccountNo:null,
    mbIFSCCode:null,
    mbIsActive:false
  }
  ngOnInit() {
  }

  add() {
    console.log(this.bankData);
  //   this.masterBankService.InsertMasterBank(this.bankData).subscribe(
  //     (res) => {
  //       this.notification.showNotification("Added Successfully !", "success");
  //     },
  //     (error) => {
  //       console.log("Error in Post Location !");
  //       this.notification.showNotification("Some error occured !", "danger");
  //     }
  //   );
  }

}
