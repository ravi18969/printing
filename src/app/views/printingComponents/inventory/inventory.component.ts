import { Component, OnInit } from '@angular/core';
import { PrintingService } from '../../../printing.service';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit{
  // paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  // gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  // fabrication =[];
  panelOpenState = false;
  papers;
  editState;
  myForm:FormGroup;
  
  constructor(private PS: PrintingService, private fb: FormBuilder, private router:Router) {
    this.myForm = this.fb.group({
      quantity: ["",Validators.required]
   });
    this.PS.getPapers().subscribe(res => {
      this.papers = res;
      console.log(res);
    })
  }

  ngOnInit() {
    console.log(this.papers);
  }

  changeEditState(id) {
    if(this.editState != null)
    this.editState = null;
    else
    this.editState = id;
  }

  onSubmit(data) {
    let quantity = data.value;
    console.log(data.value, this.editState)
    this.PS.upadtePaper(quantity, this.editState).subscribe(res => {
      this.editState= null;
      console.log(res);
      this.PS.getPapers().subscribe(res => {
        this.papers = res;
        console.log(res);
      });
    })
  }

}
