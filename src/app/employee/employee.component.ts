import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit 
{
  powers=['Smart Coder', 'Super Flexible', 'Logical Thinker', 'Excellent Analyst'];
  emp= new Employee(18,'','','');
  a="";

  submitted=true;
  onSubmit()
  {
    this.submitted=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

  clearValue():void
  {
    this.a="";
  }

}
