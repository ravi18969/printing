import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CustomValidators } from 'ng2-validation';
import { RouterModule, Router }  from '@angular/router';


import { PrintingService } from '../../../printing.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.scss']
})
export class CreateRequirementComponent implements OnInit {

  myForm: FormGroup;
  paperTypes = ["Paper Type1", "Paper Type2", "Paper Type3", "Paper Type4"];
  paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  printModes = ["Type A Machine", "Type B Machine"];
  UniqueId = Date.now();
  formStatus:Boolean = true;

  constructor(private fb: FormBuilder, private PS: PrintingService, private router: Router) { }

  ngOnInit() {
    console.log(this.UniqueId);
    this.myForm = this.fb.group({
      jobId:[this.UniqueId],
      extras:[""],
      printMode: ['', Validators.required],
      gsm: ['', Validators.required],
      plates: ['', Validators.required],
      // quality: ['', Validators.required],
      expectedDeliveryDate:['', Validators.required],
      vendor: ['', [Validators.required, Validators.minLength(4)]],
      paperType: ['', [Validators.required]],
      paperSize: ['', [Validators.required]]
    });
  }

  onSubmit(data) {
    
    const product = data.value;
    console.log("products", product);
    // this.formStatus = !this.formStatus;
    this.router.navigate(['/create/making-papers']);
    this.PS.createNewRequirement(product).subscribe((res) => {
      console.log(res);
    });


  }

}
