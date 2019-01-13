import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { PrintingService } from '../../../printing.service';

@Component({
  selector: 'app-make-papers',
  templateUrl: './make-papers.component.html',
  styleUrls: ['./make-papers.component.scss']
})
export class MakePapersComponent implements OnInit {
  myForm: FormGroup;
  selectedProduct;
  paperTypes = ["Maplitho", "Hard Paper", "Art Card", "Special paper"];
  paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  printModes = ["Type A Machine", "Type B Machine"];
  UniqueIds;
  formStatus:Boolean = true;
  specialPaper:Boolean = false;
  
  constructor(private fb: FormBuilder, private PS: PrintingService) {
      this.PS.listProudcts().subscribe(res => this.UniqueIds = res);
   }
 

  ngOnInit() {
    console.log(this.UniqueIds);
    this.myForm = this.fb.group({
      jobId:[this.UniqueIds],
      vendor: [''],
      paperType: ['', [Validators.required]],
      paperSize: ['', [Validators.required]],
      gsm: ['', Validators.required],
      rimWeight:[""],
      unitPrice: ['', Validators.required],
      totalPrice: [''],
      plateType:[""],
      specialPaper:[""],
      printMode: ['', Validators.required],
      // plates: ['', Validators.required],
      quality: ['', Validators.required],
      // expectedDeliveryDate:['', Validators.required],
    });
  }

  onSubmit(data) {
    console.log(data.value);
    this.myForm.reset();
    this.myForm.markAsPristine();
    this.myForm.markAsUntouched();
    // this.myForm.mar;
    this.formStatus = !this.formStatus;
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
