import { MasterBankSetup } from './../../_models/master-bank-setup';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from './../../_services/notification.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-setup',
  templateUrl: './bank-setup.component.html',
  styleUrls: ['./bank-setup.component.css']
})
export class BankSetupComponent implements OnInit {

  constructor(
    // private bankService:MasterBankSetupService,
    private dailog:MatDialog,
    private notification:NotificationService
  ) { }

  BankSetups:MasterBankSetup[];
  BankSetup:MasterBankSetup;

  ngOnInit() {
  }

  addBankSetup(){

  }

  deleteBankSetup(){

  }

  updateBankSetup(){

  }

  getBankSetup(id:number){

  }

}
