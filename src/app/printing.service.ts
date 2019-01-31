import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  uri = 'http://localhost:8000/api/product';
  uri2 = 'http://localhost:8000/api/fabrication';
  uri3 = 'http://localhost:8000/api/papers';

  fabStatus = ['laminationStatus', 'punchingStatus', 'uvStatus', 'foilingStatus',
  'foldingStatus', 'pinningStatus', 'stitchingStatus', 'bindingStatus', 'pastingStatus',
  'cuttingStatus'];

  constructor(private http: HttpClient) { }
  // listProudcts() {
  //   return this.http.get(`${this.uri}/listProducts`);
  // }

  createNewRequirement(product) {
     return this.http.post(`${this.uri}/create-requirement`, product);
  }

  getProuduct(id) {
    console.log("Product Id", id);
    return this.http.get(`${this.uri}/listProduct/${id}`);
  }

  getAllProuducts() {
    return this.http.get(`${this.uri}/listAllProducts`);
  }

  updatePrudct(id, updatedProduct) {
    console.log(id);
    console.log(updatedProduct);
    return this.http.post(`${this.uri}/updateProduct/${id}`, updatedProduct);
  }

  removeJob(id, paperType, count) {
    let product = {
      paper:paperType,
      count:count
    }
    return this.http.post(`${this.uri}/remove/${id}`, product);

  }


  saveFabrication(data) {

    return this.http.post(`${this.uri2}/saveFabrication`, data);
  }

  getFabricationById(id) {
    console.log("Product Id", id);
    return this.http.get(`${this.uri2}/getfabricationDetails/${id}`);
  }

  getFabricationDetails() {
    return this.http.get(`${this.uri2}/getfabrications`);
  }

  getFabricationMonthly() {
    return this.http.get(`${this.uri2}/getfabricationMonthlyBasis`);
  }

  getPapers() {
    return this.http.get(`${this.uri3}/getPapersData`);
  }

  upadtePaper(quantity, id) {
    return this.http.post(`${this.uri3}/updateQuantity/${id}`, quantity)
  }


  getProductByDate(dateRange) {
    let dateToSelect = {
      start: new Date(dateRange.start).toISOString(),
      end: new Date(dateRange.end).toISOString()
    }
    return this.http.get(`${this.uri2}/getFabricationByDate`, {params:dateToSelect})
    
  }

  

}
