import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.css']
})
export class UserApiComponent implements OnInit {
 users:any;
  constructor(private getApi: UserDataService) { }

  ngOnInit(): void {
     this.getApi.apiData().subscribe((data)=>{
      //  console.log(data);
       this.users=data;
     });
  }
  



}
