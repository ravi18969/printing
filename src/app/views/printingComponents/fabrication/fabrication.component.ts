import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { RouterModule, Router }  from '@angular/router';
import { PrintingService } from '../../../printing.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  myForm:FormGroup;
  jobIdLists=[];
  selectedJobId;
  vendorName = null;
  minDate = new Date();
  
  constructor(private fb:FormBuilder, private router:Router, private PS: PrintingService) {
    this.PS.getAllProuducts()
    .subscribe((res) => {
      Object.keys(res).forEach(key => {
        this.jobIdLists.push(res[key].jobId);     // the name of the current key.   // the value of the current key.
        });
      console.log(this.jobIdLists);
      });
   }

  ngOnInit() {
    this.myForm = this.fb.group({
      jobId:[''],
      laminationType:[''],
      laminationDate:[''],
      laminationStatus:[''],
      laminationDelayReason:[''],
      punchingDate:[''],
      punchingStatus:[''],
      punchingDelayReason:[''],
      uvType:[''],
      uvDate:[''],
      uvStatus:[''],
      uvDelayReason:[''],
      foilingType:[''],
      foilingDate:[''],
      foilingStatus:[''],
      foilingDelayReason:[''],
      foldingDate:[''],
      foldingStatus:[''],
      foldingDelayReason:[''],
      pinningDate:[''],
      pinningStatus:[''],
      pinningDelayReason:[''],
      stitchingDate:[''],
      stitchingStatus:[''],
      stitchingDelayReason:[''],
      bindingDate:[''],
      bindingStatus:[''],
      bindingDelayReason:[''],
      pastingDate:[''],
      pastingStatus:[''],
      pastingDelayReason:[''],
      cuttingDate:[''],
      cuttingStatus:[''],
      cuttingDelayReason:[''],
    });
    
  }

  jobIdChangeHandler(selectedJob) {
    this.myForm.reset();
    this.selectedJobId = selectedJob.value;
    this.PS.getFabricationById(this.selectedJobId)
    .subscribe((res) => {
      console.log(res);
      delete res['created'];
      delete res['__v'];
      delete res['_id'];
      delete res['deliveryDate'];
      delete res['workingStatus'];
      this.vendorName = res['vendor'];
      delete res['vendor'];
      this.myForm.setValue(res);
    });
  }

  onSubmit(data) {
    let fabricationDetails = data.value;
    
    var values = Object.keys(data.value).map(e => data.value[e])
    let fabricationStatus = values.filter((status) => {
      return status == 'Completed';
    })
    if(fabricationStatus.length == 10) {
      fabricationDetails.workingStatus = 11;
    }
    console.log(fabricationStatus);
    this.PS.saveFabrication(fabricationDetails)
    .subscribe( (res) => {
      this.myForm.reset();
      this.vendorName= null;
      console.log(res)
      this.router.navigate(['/']);

    });

  }

  onChanges(data) {
    console.log(data);
    this.myForm.get('pinningDate').valueChanges.subscribe((mode:string) => {
      this.myForm.get('pinningStatus').setValidators([Validators.required]);
      this.myForm.get('pinningStatus').updateValueAndValidity();
    }) 

  }


  // formControlValueChanged() {
  //   const laminationType = this.myForm.get('laminationType');
  //   const laminationDate = this.myForm.get('laminationDate');
  //   const laminationStatus = this.myForm.get('laminationStatus');
  //   // console.log(laminationType);
  //   this.myForm.get('laminationType').valueChanges.subscribe(
  //       (mode: string) => {
  //           console.log(mode);
  //           // if (mode) {
  //           //   laminationType.setValidators([Validators.required]);
  //           //   laminationDate.setValidators([Validators.required]);
  //           //   laminationStatus.setValidators([Validators.required]);
  //           // }
  //           // else {
  //           //   laminationType.clearValidators();
  //           //   laminationDate.clearValidators();
  //           //   laminationStatus.clearValidators();
  //           // }

  //           // laminationType.updateValueAndValidity();
  //           // laminationDate.updateValueAndValidity();
  //           // laminationStatus.updateValueAndValidity();
  //       });
  // }

}
