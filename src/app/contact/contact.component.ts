import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{

  messageForm: FormGroup| any;
  submitted=false;
  success=false;

  title="Angular Pipes Demo";
  salary=20000;
  todayDate=new Date();
  jsonval={name: 'Alex', age: 25,address:{a1:'Paris',a2:'France'}};

  months=['Jan','Feb','Mar','April','May','Jun','July','Aug','Sept','Oct','Nov','Dec']

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.messageForm=this.formBuilder.group({
      name: ['',Validators.required],
      message: ['', Validators.required]
    });  
  }

  onSubmit()
  {
    this.submitted=true;

    if(this.messageForm.invalid)
    {
      return;
    }

    this.success=true;
  }

}
