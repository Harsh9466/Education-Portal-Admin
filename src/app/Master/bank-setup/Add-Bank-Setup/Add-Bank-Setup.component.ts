import { MasterBankSetup } from './../../../_models/master-bank-setup';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Add-Bank-Setup',
  templateUrl: './Add-Bank-Setup.component.html',
  styleUrls: ['./Add-Bank-Setup.component.css']
})
export class AddBankSetupComponent implements OnInit {

  constructor() { }
  bankSetupData:Partial<MasterBankSetup>={
    mbsName:null,
    mbsIsActive:null
   }

  ngOnInit() {
  }

}
