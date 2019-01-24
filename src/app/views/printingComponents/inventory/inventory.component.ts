import { Component, OnInit } from '@angular/core';
import { PrintingService } from '../../../printing.service';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{
  // paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  // gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  // fabrication =[];
  
  constructor(private PS: PrintingService) {
    
  }

  ngOnInit() {
    
  }

}
