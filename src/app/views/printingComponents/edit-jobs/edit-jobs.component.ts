import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { PrintingService } from '../../../printing.service';
import { RouterModule, Router }  from '@angular/router';

@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.scss']
})
export class EditJobsComponent implements OnInit {
  myForm: FormGroup;
  paperTypes = ["Maplitho", "Hard Paper", "Art Card", "Albaster","Special paper"];
  paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  printModes = ["Type A Machine", "Type B Machine"];
  plateTypes = ["Thermal", "Velvet"]
  specialPaper:Boolean = false;
  selectedJobId;
  jobIdLists = [];
  dbProductId;

  constructor(private fb: FormBuilder, private PS: PrintingService, private router: Router) { 
    this.PS.listProudcts()
    .subscribe((res) => {
      Object.keys(res).forEach(key => {
        this.jobIdLists.push(res[key].jobId);     // the name of the current key.   // the value of the current key.
        });
      console.log(this.jobIdLists);
      });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      paperType: ['', [Validators.required]],
      printMode: ['', Validators.required],
      description:['', Validators.required],
      gsm: ['', Validators.required],
      plates: ['', Validators.required],
      rimWeight:["", Validators.required],
      unitPrice: ["", Validators.required],
      plateType:["", Validators.required],
      specialPaper:[""],
      expectedDeliveryDate:['', Validators.required],
      vendor: ['', [Validators.required, Validators.minLength(4)]],
      paperSize: ['', [Validators.required]]
    });
  }
  selectChangeHandler(selected) {
    // console.log(selected.value);
    if(selected.value == "Special paper") 
    this.specialPaper = !this.specialPaper;
    else this.specialPaper = false;
  }

  jobIdChangeHandler(selectedJob) {
    console.log(selectedJob.value);
    this.selectedJobId = selectedJob.value;
    this.PS.getProuduct(this.selectedJobId)
    .subscribe(item => {
      this.dbProductId = item['_id'];
      console.log(this.dbProductId);
      console.log(item);
      this.myForm.setValue({
        paperType: item['paperType'],
        printMode: item['printMode'],
        description:item['description'],
        // workingStatus:item['workingStatus'],
        gsm: item['gsm'],
        plates: item['plates'],
        rimWeight:item['rimWeight'],
        unitPrice: item['unitPrice'],
        plateType:item['plateType'],
        specialPaper:item['specialPaper'],
        expectedDeliveryDate:item['expectedDeliveryDate'],
        vendor: item['vendor'],
        paperSize: item['paperSize']

      });
    });
  }

  onSubmit(data) {
    let updatedItem = data.value;
    this.PS.updatePrudct(this.dbProductId,  updatedItem)
    .subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
      // this.myForm.reset();
      // this.myForm.controls[''];
      // this.myForm.clearValidators();
    })
  }

}
