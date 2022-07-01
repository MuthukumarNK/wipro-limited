import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

/*
Angular comes with it's own HTTP Library that we will use to communicate with a REST API to grab some data
and display it on our template ussing HttpClient
*/
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  helloService()
  {
    return "Angular Service";
  }

  getUsers()
  {
    return this.http.get('https://reqres.in/api/users'); //reqres.in is a free public API we use to grab sample data
  }

  baseUrl='http://localhost:9005/user';

  //Invokes User - Microservice
  getAccounts(employeeId:number):Observable<Account>
  {
   return this.http.get<Account>(`${this.baseUrl}/${employeeId}`);
  }

}