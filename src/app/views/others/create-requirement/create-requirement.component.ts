import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.scss']
})
export class CreateRequirementComponent implements OnInit {

  myForm: FormGroup;
  paperTypes = ["Thermal", "Old One", "New paper", "Silica"];
  paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  UniqueId = Date.now();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.UniqueId);
    this.myForm = this.fb.group({
      jobId:[this.UniqueId],
      printMode: ['', Validators.required],
      gsm: ['', Validators.required],
      plates: ['', Validators.required],
      quality: ['', Validators.required],
      vendor: ['', [Validators.required, Validators.minLength(4)]],
      paperType: ['', [Validators.required]],
      paperSize: ['', [Validators.required]]
    });
  }

  onSubmit(data) {
    console.log(data.value);
  }

}
