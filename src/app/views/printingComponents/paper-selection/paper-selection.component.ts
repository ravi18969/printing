import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { PrintingService } from '../../../printing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paper-selection',
  templateUrl: './paper-selection.component.html',
  styleUrls: ['./paper-selection.component.scss']
})
export class PaperSelectionComponent implements OnInit {

  myForm: FormGroup;
  selectedProduct;
  paperTypes = ["Maplitho", "Hard Paper", "Art Card", "Albaster","Special paper"];
  printModes = ["Type A Machine", "Type B Machine"];
  formStatus:Boolean = true;
  specialPaper:Boolean = false;
  
  constructor(private fb: FormBuilder, private PS: PrintingService, private router: Router) {
      // this.PS.listProudcts().subscribe(res => this.UniqueIds = res);
   }
 

  ngOnInit() {
    // console.log(this.UniqueIds);
    this.myForm = this.fb.group({ 
      paperType: ['', [Validators.required]],
      rimWeight:["", Validators.required],
      unitPrice: ["", Validators.required],
      plateType:["", Validators.required],
      specialPaper:[""],
      printMode: ['', Validators.required],
    });
  }

  onSubmit(data) {
    console.log(data.value);
    var finalProduct = JSON.parse(sessionStorage.getItem("products"));
    var paperDetails = data.value;
    if(paperDetails.paperType !== "Special paper"){
      paperDetails.specialPaper = "";
    }
    else console.log("paper details:", paperDetails);
    finalProduct.papers = paperDetails;
    sessionStorage.removeItem('products');
    this.PS.createNewRequirement(finalProduct).subscribe((result) => {
      console.log(result)
      this.router.navigate(['/']);
    });
  }

  selectChangeHandler(selected) {
    // console.log(selected.value);
    if(selected.value == "Special paper") 
    this.specialPaper = !this.specialPaper;
    else this.specialPaper = false;
  }

  findProduct(id) {
    let productId = id.value;
    this.PS.getProuduct(productId).subscribe(result => {
      this.selectedProduct = result;
    })
    console.log(this.selectedProduct);
  }

}
