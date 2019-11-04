import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http'
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private server: string = "http://localhost:8082"

  createVendor(vendor) {
    console.log(vendor)
    let serverUrl = this.server + "/createVendor"

    let header = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(serverUrl, JSON.stringify(vendor), { headers: header });
  }

  createOpertor(operator) {

    let serverUrl = this.server + "/createOperator"

    let header = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(serverUrl, JSON.stringify(operator), { headers: header });
  }
  createUser(user) {
    let serverUrl = this.server + "/createUser"

    let header = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(serverUrl, JSON.stringify(user), { headers: header });
  }
appliationNo(){
  let serverUrl=this.server+"/createOperator"

  let header=new Headers({
    'Content-Type':'application/json'
  });
  return this.http.get(serverUrl,{headers:header});
}
appliation(){
  let serverUrl=this.server+"/createVendor"

  let header=new Headers({
    'Content-Type':'application/json'
  });
  return this.http.get(serverUrl,{headers:header});
}

}
