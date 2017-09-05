import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  employees: Array<any> = [];

  constructor(private service:EmployeeService) {  }
  
  ngOnInit(): void {
    this.service.getEmployee().subscribe(
      (res)=>{
        this.employees=res;
      },
      (err)=>{
        console.log('error getting data');        
      });
  }
}