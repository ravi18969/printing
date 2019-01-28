import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { RouterModule, Router }  from '@angular/router';
import { PrintingService } from '../../../printing.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  myForm: FormGroup;
  // paperTypes = ["Paper Type1", "Paper Type2", "Paper Type3", "Paper Type4"];
  paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  printModes = ["Type A Machine", "Type B Machine"];
  UniqueId = Date.now();
  formStatus:Boolean = true;

  selectedProduct;
  paperTypes = ["Maplitho", "Hard Paper", "Art Card", "Albaster","Special paper"];
  // printModes = ["Type A Machine", "Type B Machine"];
  // formStatus:Boolean = true;
  specialPaper:Boolean = false;

  constructor(private fb: FormBuilder, private PS: PrintingService, private router: Router) { }
  minDate = new Date();
  ngOnInit() {
    console.log(this.UniqueId);
    this.myForm = this.fb.group({
      jobId:[this.UniqueId],
      description:["", Validators.required],
      gsm: ['', Validators.required],
      plates: ['', Validators.required],
      startDate:['', Validators.required],
      expectedDeliveryDate:['', Validators.required],
      vendor: ['', [Validators.required, Validators.minLength(4)]],
      paperSize: ['', [Validators.required]],
      paperType: ['', [Validators.required]],
      rimWeight:["", Validators.required],
      unitPrice: ["", Validators.required],
      plateType:["", Validators.required],
      specialPaper:[""],
      printMode: ['', Validators.required],
    });
  }

  onSubmit(data) {
    
    const product = data.value;
    console.log("products", product);
    this.PS.createNewRequirement(product)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
    // sessionStorage.setItem("products", JSON.stringify(product));
    // this.router.navigate(['/job/select-papers']);
    // this.PS.createNewRequirement(product).subscribe((res) => {
    //   console.log(res);
    // });
  }

  selectChangeHandler(selected) {
    // console.log(selected.value);
    if(selected.value == "Special paper") 
    this.specialPaper = !this.specialPaper;
    else this.specialPaper = false;
  }

  
}
