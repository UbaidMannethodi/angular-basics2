import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  add(value: any) {
    this.list.push({ id: this.list.length, name: value });
    // console.log(this.dataArray);
  }

  remove(id: number) {
    // console.log(id);
    this.list = this.list.filter(item => item.id !== id);
  }


}
