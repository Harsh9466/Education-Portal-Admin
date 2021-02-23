import { MasterBank } from './../../_models/master-bank';
import { NotificationService } from './../../_services/notification.service';
import { MasterBankService } from './../../_services/master-bank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
Banks:MasterBank[];
Bank:MasterBank;

  constructor(private bankService:MasterBankService,private notification:NotificationService) { }

  ngOnInit() {
    this.getBanks();
  }

  getBanks(){
    this.bankService.GetMasterBank().subscribe
    ((res:any)=>{
      this.Banks=res
    },(error)=>{
      this.notification.showNotification("Problem on Retriving Bank Data!!","danger")
    });
  }
}
