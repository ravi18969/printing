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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
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
        localStorage.setItem('token', res.token)
        localStorage.setItem('userRole', res.role);
        console.log(res.token);
        this.router.navigate(['/'])
      },
      err =>{
        console.log(err)
          this.snackBar.open(err.error, 'Close',{
            horizontalPosition:"center",
            verticalPosition:"top"
          });
          this.router.navigate(["/"]);
          this.progressBar.mode = "determinate";
          // this.signinForm.reset();  
      }
    ) 
  }

}
