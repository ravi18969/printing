import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { PrintingService } from '../../../printing.service';
import { Moment } from 'moment';




@Component({
  selector: 'app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  dataSource;
  displayedColumns;
  selected: {start: Moment, end: Moment};
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private PS: PrintingService) {
    this.displayedColumns = ['jobId', 'vendor', 'deliveryDate', 'Lamination', 'Punching', 'UV',
      'Foiling', 'Folding', 'Pinning', 'Stitching', 'Binding', 'Pasting', 'Cutting'];
  }

  ngOnInit() {
    // console.log(this.selected);
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

  change(data) {
    if(data.start != null){
      console.log(data.start._d, data.end._d);
    }
  }


}
