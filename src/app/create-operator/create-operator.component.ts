import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-operator',
  templateUrl: './create-operator.component.html',
  styleUrls: ['./create-operator.component.css']
})
export class CreateOperatorComponent implements OnInit {

  email: any;
  lastName: any;
  registerContact: any;
  gender: any;
  officeAddress: any;
  officeArea: any;
  officeLandMark: any;
  officeCity: any;
  officePin: any;
  residentAddress: any;
  residentArea: any;
  residentLandMark: any;
  residentCity: any;
  residentPin: any;
  vehicleNo: any;
  bankName: any;
  branch: any;
  accountNum: any;
  accountType: any;
  ifscCode: any;
  application:string;
  supervisionCode:any;
  firstName:any;
  middleName:any;


  constructor(private Operator:UserService ) {}

  ngOnInit() {
    this.Operator.appliationNo().subscribe(res=>{
      this.application=res.text();
    });
   }

  createOperator(){
let Operator={ 
  'applicationNo' : this.application,
      'firstName' : this.firstName,
      'middleName' : this.middleName,
      'lastName' : this.lastName,
      'contact' : this.registerContact,
      'email':this.email,
      'sex' : this.gender,
      'officeAddress' : this.officeAddress,
      'officeArea' : this.officeArea,
      'officelandMark' : this.officeLandMark,
      'officeCity' : this.officeCity,
      'officePin' : this.officePin,
      'residentAddress' : this.residentAddress,
      'residentArea' : this.residentArea,
      'residentlandMark' : this.residentLandMark,
      'residentCity' : this.residentCity,
      'residentPin' : this.residentPin,
       'vehicleNum' : this.vehicleNo,
      'bankName' : this.bankName,
      'branch' : this.branch,
      'accountNumber' : this.accountNum,
      'accountType' : this.accountType,
      'ifscCode' : this.ifscCode, 
}
console.log(Operator);
this.Operator.createOpertor(Operator).subscribe(res=>{
  console.log(res);
}, err=>{

});

  }
}
