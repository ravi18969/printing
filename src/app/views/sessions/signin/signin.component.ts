import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton, MatSnackBarModule, MatSnackBar } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  snackBarRef;
  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.auth.loginUser(signinData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
      },
      err =>{
          let snackBarRef = this.snackBar.open("Invalid Email and Password", 'Close',{
            horizontalPosition:"center",
            verticalPosition:"top"
          });
          console.log(err);
          this.router.navigate(["/"]);
          this.progressBar.mode = "determinate";
          // this.signinForm.reset();  
      }
    ) 
  }

}
