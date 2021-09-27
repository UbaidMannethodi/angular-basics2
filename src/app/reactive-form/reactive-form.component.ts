import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
  loginUser() {
    console.warn(this.loginForm.value);

  }
  // get username inputfield
  get user() {
    return this.loginForm.get('username');
  }
  // get username inputfield
  get pass() {
    return this.loginForm.get('password');
  }

}
