import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit 
{

  currentNumber='0';
  firstOperand=null;
  operator=null;
  waitForSecondNumber=false;

  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

}
