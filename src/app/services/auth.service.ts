import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl:string="https://my-json-server.typicode.com/esmiz-dream/cms-mock-api/users";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.baseurl);
  }

  getByCode(code:any){
    return this.http.get(this.baseurl+"/?username="+code);
  }

  isLoggedIn(){
    return sessionStorage.getItem('user')!=null;
  }

  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString:'';
  }

  
}
