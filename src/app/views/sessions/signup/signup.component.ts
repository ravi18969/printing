import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton, MatSnackBar } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup
  snackBarRef;
  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: password,
      confirmPassword: confirmPassword,
      // agreed: new FormControl('', (control: FormControl) => {
      //   const agreed = control.value;
      //   if(!agreed) {
      //     return { agreed: true }
      //   }
      //   return null;
      // })
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);
    delete signupData.confirmPassword;

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.auth.registerUser(signupData)
    .subscribe(
      res => {
      // localStorage.setItem('token', res.token)
      this.router.navigate(['/']);
    },
      err => {
        console.log(err);
        this.snackBar.open(err.error, 'Close',{
          horizontalPosition:"center",
          verticalPosition:"top"
        });
        this.router.navigate(["/sessions/signup"]);
        this.progressBar.mode = "determinate";
    })
  }

}
