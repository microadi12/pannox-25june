import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  
  ownerMiddleName: any;
  application: any;
  supervisionCode: any;
  subCode: any;
  planCode: any;
  kilomtr: any;
  supervisionMobile: any;
  planName: any;
  planAmt: any;
  planDate: any;
  ownerName: any;
  ownermiddleName: any;
  ownerLastName: any;
  garageName: any;
  gender: any;
  telNum: any;
  registerMobile: any;
  email: any;
  residentAddress: any;
  residentArea: any;
  residentlandMark: any;
  residentCity: any;
  residentPin: any;
  residentNum: any;
  holderName: any;
  middleName: any;
  surName: any;
  bankName: any;
  branch: any;
  accountNo: any;
  accountType: any;
  ifscCode: any;
  constructor(private user : UserService, private http : Http) { }

  ngOnInit() {
    this.user.appliation().subscribe(res=>{
this.application=res.text();
    });
  }

  createVendor() {

    let vendor = {

      'Application': this.application,
      'superVision': this.supervisionCode,
      'subCode': this.subCode,
      'planCode': this.planCode,
      'kilomtr': this.kilomtr,
      'superMobile': this.supervisionMobile,
      'planName': this.planName,
      'planAmt': this.planAmt,
      'planDate': this.planDate,
      'firstName': this.ownerName,
      'middleName': this.ownerMiddleName,
      'lastName': this.ownerLastName,
      'garageName': this.garageName,
      'sex': this.gender,
      'contactNum': this.telNum,
      'registerMob': this.registerMobile,
      'email': this.email,
      'registerAddress': this.residentAddress,
      'registerArea': this.residentArea,
      'registerMark': this.residentlandMark,
      'registerCity': this.residentCity,
      'pinCode': this.residentPin,
      'contactNumber': this.residentNum,
      'name': this.holderName,
      'midName ': this.middleName,
      'surName': this.surName,
      'bankName': this.bankName,
      'branch': this.branch,
      'accountNum': this.accountNo,
      'accountType': this.accountType,
      'ifscCode': this.ifscCode,
    }

    console.log(vendor)
    this.user.createVendor(vendor).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err)

    });

  }


}
