import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  user(){
    return [
      {name:'peter',email:'peter@gmail.com'},
      {name:'ubaid',email:'ubaid@gmail.com'},
      {name:'fahiz',email:'fahiz@gmail.com'}
    ]
  }
}
