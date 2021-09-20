import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
   displayData:any =[];
  constructor() { }

  ngOnInit(): void {

  
  }


  // *** To Display Data
  getData(data: NgForm){
      console.log(data);
      this.displayData=data;
      
  }


}
