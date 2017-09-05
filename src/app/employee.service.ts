import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers, Request } from '@angular/http';
import { Route, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService {
  options: RequestOptions;

  constructor(public http: Http) {
    let headers = new Headers({ "Content-Type": "application/json" });
    this.options = new RequestOptions({ headers: headers });
   }

  getEmployee():Observable<any>{
    return this.http.get(".../data/employees.json", this.options)
    .map((res:Response)=>{
      console.log(res);
      return res.json();
    },
  (err)=>{
    console.log('some error');    
    return {error:true};
  });
  }

}
