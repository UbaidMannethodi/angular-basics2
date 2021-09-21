import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item=0; 
  @Input()  user:{name:string,place:string,accounts:string[]} ={name:'',place:'',accounts:[]};
  constructor() { }

  ngOnInit(): void {
  }
}
