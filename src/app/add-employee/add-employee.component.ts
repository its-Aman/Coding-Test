import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm:FormGroup;
  
  constructor(private fb:FormBuilder, private service:EmployeeService, private route:Router) {
    this.employeeForm = this.fb.group({
      'name':[null,[Validators.required]],
      'phone':[null,[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      'email':[null,[Validators.required, Validators.pattern("[a-zA-Z._0-9]+@[a-zA-Z]+.[a-zA-Z]+")]],
      'address':[null,[Validators.required]],
      'id':[Math.floor(Math.random() * 100) + 1 ]
    });
   }

  ngOnInit() {
  }
  
  submitEmployee(){
    this.employeeForm.controls['name']
    this.service.log(this.employeeForm.value);

    this.service.addEmployee(this.employeeForm.value)
    .then(()=>{
      this.route.navigateByUrl('');
    }
    );
  }

  checkNumberLength(ip){
    this.service.log('in ip');
    if(this.employeeForm.controls['phone'].value<9999999999) return true;
    else this.employeeForm.controls['phone'].setValue(this.employeeForm.controls['phone'].value.toString().slice(0,10))
  }
}
