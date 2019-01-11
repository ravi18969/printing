import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.scss']
})
export class CreateRequirementComponent implements OnInit {

  formData = {}
  // console = console;
  basicForm: FormGroup;
  Uniquie_id = Date.now();

  constructor() { }

  ngOnInit() {
    console.log(this.Uniquie_id);
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));
    // this.basicForm = new FormGroup({
    //   vendor: new FormControl("", Validators.minLength(4)),
    //   paperSize: new FormControl("", Validators.required),
    //   paperType: new FormControl("", Validators.required),
    //   quantity: new FormControl("", Validators.required),

    // });

    // this.basicForm = new FormGroup({
    //   username: new FormControl('', [
    //     Validators.minLength(4),
    //     Validators.maxLength(9)
    //   ]),
    //   firstname: new FormControl('', [
    //     Validators.required
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   website: new FormControl('', CustomValidators.url),
    //   date: new FormControl(),
    //   cardno: new FormControl('', [
    //     CustomValidators.creditCard
    //   ]),
    //   phone: new FormControl('', CustomValidators.phone('BD')),
    //   password: password,
    //   confirmPassword: confirmPassword,
    //   gender: new FormControl('', [
    //     Validators.required
    //   ]),
    //   agreed: new FormControl('', (control: FormControl) => {
    //     const agreed = control.value;
    //     if(!agreed) {
    //       return { agreed: true }
    //     }
    //     return null;
    //   })
    // })
  }

  onSubmit(data) {
    console.log(data);
  }

}
