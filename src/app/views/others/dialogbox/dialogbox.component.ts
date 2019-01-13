import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router }  from '@angular/router';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

    form: FormGroup;
    description:string;


  constructor( private fb: FormBuilder, private router: Router,
    private dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
}

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
    this.router.navigate(['/create/edit-job']);


  }

  close() {
      this.dialogRef.close();
  }
}

