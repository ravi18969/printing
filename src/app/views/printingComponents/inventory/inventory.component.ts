import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { PrintingService } from '../../../printing.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   quantity:number;
// }
// paperTypes = ["Maplitho", "Hard Paper", "Art Card", "Albaster","Special paper"];

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Maplitho', weight: 4.0026, symbol: 'He', quantity: 526},
//   {position: 2, name: 'Hard Paper', weight: 6.941, symbol: 'Li', quantity: 156},
//   {position: 3, name: 'Art Card', weight: 9.0122, symbol: 'Be', quantity: 525},
//   {position: 4, name: 'Albaster', weight: 10.811, symbol: 'B', quantity: 535},
//   {position: 5, name: 'Special paper', weight: 12.0107, symbol: 'C', quantity: 156},
  
// ];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{
  // paperSizes = ["22x28", "23x36", "24x34", "25x36", "28x40", "30x40", "36x46"];
  // gsms = [60, 70, 80, 90, 100, 170, 210, 240, 250, 300, 350, 400, 450];
  // fabrication =[];
  dataSource;
  displayedColumns;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private PS: PrintingService) {
    this.displayedColumns = [
      'jobId', 
      'deliveryDate', 
      'Lamination', 
      'Punching', 
      'UV',
      'Foiling', 
      'Folding', 
      'Pinning',
      'Stitching', 
      'Binding', 
      'Pasting',
      'Cutting'
    ];

    // this.dataSource = new LaminationData(this.PS);
    
  }

  ngOnInit() {
    this.PS.getFabricationDetails().subscribe(result => {
      if(!result) {
        return;
      }
      this.dataSource = new MatTableDataSource(<any> result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

// export class LaminationData extends DataSource<any> {
//   constructor(private PS:PrintingService) {
//     super();
//   }

//   connect(): Observable<any> {
//     // console.log(this.PS.getFabricationDetails());
//     return this.PS.getFabricationDetails();
//   }

//   disconnect() {

//   }

// }

