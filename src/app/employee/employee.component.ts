import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<any> = [];
  public employeeForm:FormGroup;
  
  constructor(private service:EmployeeService, private route:Router, private fb:FormBuilder,) { 
  this.employeeForm = this.fb.group({
    'name':[null,[Validators.required]],
    'phone':[null,[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
    'email':[null,[Validators.required]],
    'address':[null,[Validators.required]],
    'id':[Math.floor(Math.random() * 100) + 1 ]
  });
  }
    
    ngOnInit(): void {
      this.service.getEmployee().then(
        (res)=>{
          this.employees=res;
        });
    }

    delete(){
      this.service.deleteEmployee(this.employeeForm.controls['id'].value)
      .then((e)=>{
        this.service.log(e,'delete');        
        this.employees=e;
        this.employeeForm.reset();
      });
    }

    updateEmployee(){ 
      this.service.updateEmployee(this.employeeForm.value)
      .then((e)=>{
        this.service.log(e,'update');
        this.employees=e;
        this.employeeForm.reset();        
      }
      );
    }
}
