import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
       username:new FormControl(''),
       password:new FormControl('')
  });
  loginUser(){
    
  }
}
