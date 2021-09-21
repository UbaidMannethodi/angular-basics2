import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parant',
  templateUrl: './child-to-parant.component.html',
  styleUrls: ['./child-to-parant.component.css']
})
export class ChildToParantComponent implements OnInit {
 @Output() updateDataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
