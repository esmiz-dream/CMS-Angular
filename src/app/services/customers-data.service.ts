import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersDataService {
url="https://my-json-server.typicode.com/esmiz-dream/cms-mock-api/customers";
  constructor(private http:HttpClient) { }
  customers()
  {
    return this.http.get(this.url);
  }

  saveCustomer(data:any){
    return this.http.post(this.url,data)
  }
}
