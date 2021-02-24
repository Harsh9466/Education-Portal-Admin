import { NotificationService } from './../../../_services/notification.service';
import { MasterBankService } from './../../../_services/master-bank.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Delete-Bank-Setup',
  templateUrl: './Delete-Bank-Setup.component.html',
  styleUrls: ['./Delete-Bank-Setup.component.css']
})
export class DeleteBankSetupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bankSerupService:MasterBankService,
    private notification:NotificationService
  ) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  delete(){
  }

}
