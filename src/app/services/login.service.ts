import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  private server  = "http://localhost:8082"

 createLogin(username){
 
  let serverUrl = this.server+"/createLogin"

  let header = new Headers({
    'Content-Type' : 'application/json' 
  })

  return this.http.post(serverUrl, JSON.stringify(username), {headers : header})
 

 }


 
}
