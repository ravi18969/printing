import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  uri = 'http://localhost:8000/api/product';
  uri2 = 'http://localhost:8000/api/fabrication';
  
  constructor(private http: HttpClient) { }
  listProudcts() {
    return this.http.get(`${this.uri}/listProducts`);
  }

  createNewRequirement(productDetails) {
    console.log("product that is coming from make papers:", productDetails);
    var producToSave = {
      jobId: productDetails.jobId,
		vendor:productDetails.vendor,
		paperType:productDetails.papers.paperType,
		paperSize:productDetails.paperSize,
		gsm:productDetails.gsm,
		plates:productDetails.plates,
		plateType:productDetails.papers.plateType,
		rimWeight:productDetails.papers.rimWeight,
		unitPrice:productDetails.papers.unitPrice,
		specialPaper:productDetails.papers.specialPaper,
		printMode:productDetails.papers.printMode,
		description:productDetails.extras,
		expectedDeliveryDate:productDetails.expectedDeliveryDate
    }
    // debugger
     return this.http.post(`${this.uri}/create-requirement`, producToSave);
  }

  getProuduct(id) {
    console.log("Product Id", id);
    return this.http.get(`${this.uri}/listProduct/${id}`);
  }

  updatePrudct(id, updatedProduct) {
    console.log(id);
    console.log(updatedProduct);
    return this.http.post(`${this.uri}/updateProduct/${id}`, updatedProduct);
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


}
