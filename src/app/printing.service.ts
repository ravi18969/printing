import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  uri = 'http://localhost:8000/api/product';
  
  constructor(private http: HttpClient) { }
  listProudcts() {
    return this.http.get(`${this.uri}/listProducts`);
  }

  createNewRequirement(productDetails) {
    console.log(productDetails);
    // debugger
     return this.http.post(`${this.uri}/create-requirement`, productDetails);
  }

  getProuduct(id) {
    console.log("Product Id", id);
    return this.http.get(`${this.uri}/listProduct/${id}`);
  }
}
