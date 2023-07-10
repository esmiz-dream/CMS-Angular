import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  url:string="https://my-json-server.typicode.com/esmiz-dream/cms-mock-api/products";
  constructor(private http:HttpClient) { }

  getProduct()
  {
    return this.http.get(this.url);
  }
}
