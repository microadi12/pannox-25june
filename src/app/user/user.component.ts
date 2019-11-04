import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  registerContact: any;
  subCode: any;
  planCode: any;
  kilomtr: any;
  supervisionMobile: any;
  planName: any;
  planAmt: any;
  planDate: any;
  firstName: any;
  middleName: any;
  lastName: any;
  drive: any;
  gender: any;
  officeAddress: any;
  officeArea: any;
  officeLandMark: any;
  officeCity: any;
  officePin: any;
  officeNum: any;
  residentAddress: any;
  residentArea: any;
  residentLandMark: any;
  residentCity: any;
  residentPin: any;
  residentContact: any;
  vehicleNo: any;
  carMark: any;
  model: any;
  version: any;
  fuel: any;
  varied: any;
  colour: any;
  kilomte: any;
  bankName: any;
  branch: any;
  accountNum: any;
  accountType: any;
  ifscCode: any;
  application: string;
  supervisionCode: any;
  constructor(private user : UserService) { }

  ngOnInit() {


  }

  createUser(){

    let user = {
      'applicationNo' : this.application,
      'superVision' : this.supervisionCode,
      'subCode':  this.subCode,
      'planCode' : this.planCode,
      'km' : this.kilomtr,
      'supervisionMob' : this.supervisionMobile,
      'planName' : this.planName,
      'planAmount' : this.planAmt,
      'planDate' : this.planDate,
      'firstName' : this.firstName,
      'middleName' : this.middleName,
      'lastName' : this.lastName,
      'contact' : this.registerContact,
      'driving' : this.drive,
      'sex' : this.gender,
      'officeAddress' : this.officeAddress,
      'officeArea' : this.officeArea,
      'officelandMark' : this.officeLandMark,
      'officeCity' : this.officeCity,
      'officePin' : this.officePin,
      'officeNum' : this.officeNum,
      'residentAddress' : this.residentAddress,
      'residentArea' : this.residentArea,
      'residentlandMark' : this.residentLandMark,
      'residentCity' : this.residentCity,
      'residentPin' : this.residentPin,
      'residentContact' : this.residentContact,
      'vehicleNum' : this.vehicleNo,
      'carMark' : this.carMark,
      'carModel' : this.model,
      'carVersion' : this.version,
      'carFuel' : this.fuel,
      'carVaried' : this.varied,
      'carColour' : this.colour,
      'kiloMeter' : this.kilomte, 
      'bankName' : this.bankName,
      'branch' : this.branch,
      'accountNumber' : this.accountNum,
      'accountType' : this.accountType,
      'ifscCode' : this.ifscCode, 

    }  
    console.log(user);
    this.user.createUser(user).subscribe(res=>{
      console.log(res);
    }, err=>{

    });

  }
}
