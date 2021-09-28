import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   users:any;
  constructor(private userData:UserDataService) { 
    // console.log(userData.user());
    this.users = userData.user();
  }

  ngOnInit(): void {
  }

}
