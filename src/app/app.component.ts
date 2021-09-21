import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-app';
  // show = true;
  // color = 'red';

  user = [
    {
      name: 'unbaid',
      place: 'pullara',
      accounts: ['gsd', 'gsd', 'gsd', 'gsd'],
    },
    {
      name: 'unbagftwsgid',
      place: 'pullara',
      accounts: ['gsd', 'gsd', 'gsd', 'gsd'],
    },
    { name: 'dgs', place: 'pullara', accounts: ['gsd', 'car', 'gsd', 'gsd'] },
    {
      name: 'fhygadfh',
      place: 'pullara',
      accounts: ['gsd', 'gsd', 'gsd', 'gsd'],
    },
  ];



//*** for Child Componenent
  
childData:number =10;
    updateData(){
       this.childData =Math.floor(Math.random()*10);
    }

}
