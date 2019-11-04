import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: any;
  password: any;
  constructor(private http : Http, private login : LoginService) { }

  ngOnInit() {
  }

  loginCredential(){

    let username = {
      'userId' : this.userId,
      'password' : this.password
    }
    console.log(username)
    
    this.login.createLogin(username).subscribe(response=>{
      console.log(response);
    }, error=>{


    });

  }
}
