import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {
url:string="https://my-json-server.typicode.com/esmiz-dream/cms-mock-api/order?_expand=customer&_expand=product";
baseUrl:string="https://my-json-server.typicode.com/esmiz-dream/cms-mock-api/order";
// http://localhost:3000/order/1?_expand=customer
  constructor(private http:HttpClient) { }
  getOrders()
  {
    return this.http.get(this.url);
  }

  saveOrder(data:any){
    return this.http.post(this.baseUrl,data); 
  }

  getCustomerOfOrder(id:any)
  {
    return this.http.get("http://localhost:3000/order/1?_expand=customer");
  }
}
