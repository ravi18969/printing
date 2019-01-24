import { Component, OnInit, ViewChild } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { PrintingService } from '../../../printing.service';




@Component({
  selector: 'app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  dataSource;
  displayedColumns;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // jobIds = [189569520, 5632244355, 189569520, 189569520];
  // fabrication =[];
  // constructor(private PS: PrintingService) { 
  //   this.PS.getFabricationDetails()
  //   .subscribe((res) => {
  //     Object.keys(res).forEach(key => {
  //       this.fabrication.push(res[key]);     // the name of the current key.   // the value of the current key.
  //       });
  //   });
  // }

  constructor(private PS: PrintingService) {
    this.displayedColumns = ['jobId', 'deliveryDate', 'Lamination', 'Punching', 'UV',
      'Foiling', 'Folding', 'Pinning', 'Stitching', 'Binding', 'Pasting', 'Cutting'];
  }

  ngOnInit() {
    this.PS.getFabricationDetails().subscribe(result => {
      if(!result) {
        return;
      }
      this.dataSource = new MatTableDataSource(<any> result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

}
