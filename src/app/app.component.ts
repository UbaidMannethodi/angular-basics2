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
      name: 'ubaid',
      place: 'pullara',
      accounts: ['LinkedIn', 'facbook', 'whatsapp', 'instagram'],
    },
    {
      name: 'fazil',
      place: 'kondotty',
      accounts: ['gmail', 'yahoo', 'whatsapp', 'instagram'],
    },
  
  ];

//*** sent Data from parant to Child Componenent

childData:number =10;
updateData(){
  this.childData =Math.floor(Math.random()*10);
}

//*** sent Data from child to parant Componenent
data: string ="";
  updateParantData(item:string){
     console.log(item);
     this.data = item;

  }

}
