import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PrintingService } from '../../../printing.service';



@Component({
  selector: 'app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  jobIds = [189569520, 5632244355, 189569520, 189569520];
  fabrication =[];
  constructor(private PS: PrintingService) { 
    this.PS.getFabricationDetails()
    .subscribe((res) => {
      Object.keys(res).forEach(key => {
        this.fabrication.push(res[key]);     // the name of the current key.   // the value of the current key.
        });
    });
  }

  ngOnInit() {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
