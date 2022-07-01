import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit 
{
  s:string | any; // any is built in data type used when we are unsure of data type of the variable
  users:any;

  Account:any=[];
  Users:any=[];
  employeeId:number|any;


  constructor(private data:DataService) 
  {

  }

  ngOnInit(): void 
  {
    this.s=this.data.helloService();
    this.data.getUsers().subscribe(data => { this.users=data
    console.log (this.users)}); 
  }

  getAccounts()
  {
    return this.data.getAccounts(this.employeeId).subscribe((d: {}) => {
      this.Account=d;
    })
  }

}
