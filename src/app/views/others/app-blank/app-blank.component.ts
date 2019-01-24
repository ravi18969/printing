import { Component, OnInit, ViewChild } from '@angular/core';
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


}
