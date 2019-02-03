import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  uri = 'http://localhost:8000/api/product';
  uri2 = 'http://localhost:8000/api/fabrication';
  uri3 = 'http://localhost:8000/api/papers';
  token = localStorage.getItem('token');

  fabStatus = ['laminationStatus', 'punchingStatus', 'uvStatus', 'foilingStatus',
  'foldingStatus', 'pinningStatus', 'stitchingStatus', 'bindingStatus', 'pastingStatus',
  'cuttingStatus'];

  constructor(private http: HttpClient) {
   }
   options = new HttpHeaders().set('Authorization', this.token)
  // listProudcts() {
  //   return this.http.get(`${this.uri}/listProducts`);
  // }

  createNewRequirement(product) {
     return this.http.post(`${this.uri}/create-requirement`, product, {headers: this.options});
  }

  getProuduct(id) {
    return this.http.get(`${this.uri}/listProduct/${id}`, {headers: this.options});
  }

  getAllProuducts() {
    return this.http.get(`${this.uri}/listAllProducts`, {headers: this.options});
  }

  updatePrudct(id, updatedProduct) {
    return this.http.post(`${this.uri}/updateProduct/${id}`, updatedProduct, {headers: this.options});
  }

  removeJob(id, paperType, count) {
    let product = {
      paper:paperType,
      count:count
    }
    return this.http.post(`${this.uri}/remove/${id}`, product, {headers: this.options});

  }


  saveFabrication(data) {
    return this.http.post(`${this.uri2}/saveFabrication`, data, {headers: this.options});
  }

  getFabricationById(id) {
    return this.http.get(`${this.uri2}/getfabricationDetails/${id}`, {headers: this.options});
  }

  getFabricationDetails() {
    return this.http.get(`${this.uri2}/getfabrications`, {headers: this.options});
  }

  getFabricationMonthly() {
    return this.http.get(`${this.uri2}/getfabricationMonthlyBasis`, {headers: this.options});
  }

  getPapers() {
    return this.http.get(`${this.uri3}/getPapersData`, {headers: this.options});
  }

  upadtePaper(quantity, id) {
    return this.http.post(`${this.uri3}/updateQuantity/${id}`, quantity, {headers: this.options})
  }


  getProductByDate(dateRange) {
    let dateToSelect = {
      start: new Date(dateRange.start).toISOString(),
      end: new Date(dateRange.end).toISOString()
    }
    return this.http.get(`${this.uri2}/getFabricationByDate`, {params:dateToSelect, headers: this.options})
    
  }

  

}
