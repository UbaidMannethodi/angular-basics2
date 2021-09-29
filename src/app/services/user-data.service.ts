import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  // custom created API
  user() {
    return [
      { name: 'peter', email: 'peter@gmail.com' },
      { name: 'ubaid', email: 'ubaid@gmail.com' },
      { name: 'fahiz', email: 'fahiz@gmail.com' }
    ]
  }
  // call data from API
  apiData() {
    return this.http.get<any>(this.url);
  }

  //*** post data to api
  // saveuser(data:any){
  //   return this.http.post<any>(this.url,data);
  // }
}
