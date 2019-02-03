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
    })
  }

  ngOnInit() {
  }

  changeEditState(id) {
    if(this.editState != null)
    this.editState = null;
    else
    this.editState = id;
  }

  onSubmit(data) {
    let quantity = data.value;
    this.PS.upadtePaper(quantity, this.editState).subscribe(res => {
      this.editState= null;
      this.PS.getPapers().subscribe(res => {
        this.papers = res;
      });
    })
  }

}
