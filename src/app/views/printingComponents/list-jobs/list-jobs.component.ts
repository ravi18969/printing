import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { PrintingService } from '../../../printing.service';


@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {

  dataSource;
  displayedColumns;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private PS: PrintingService) { 
    this.displayedColumns = ['jobId', 'vendor', 'paperType', 'paperSize', 'gsm',
    'plates', 'plateType', 'unitPrice', 'printMode', 'description', 'deliveryDate', 'status', 'actions'];
  }

  ngOnInit() {
    this.PS.getAllProuducts().subscribe(result => {
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
