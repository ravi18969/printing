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
  totalJobs;
  delayedJobs;
  pendingJobs;
  completedJobs;
  selected: {start: Moment, end: Moment};
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private PS: PrintingService) {
    this.displayedColumns = ['jobId', 'vendor', 'deliveryDate', 'Lamination', 'Punching', 'UV',
      'Foiling', 'Folding', 'Pinning', 'Stitching', 'Binding', 'Pasting', 'Cutting'];
      this.PS.getFabricationMonthly()
      .subscribe((res:any) => {
        this.totalJobs = res.totalJobs;
        this.pendingJobs = res.pendingJobs;
        this.delayedJobs = res.delayedJobs;
        this.completedJobs = res.completedJobs;
      });
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

  change(data) {
    if(data.start != null){
      let dateRange = {
        start: data.start._d,
        end: data.end._d
      }
      this.PS.getProductByDate(dateRange)
      .subscribe((result:any) => {
        // result.filter()
        if(!result) {
          return;
        }
        this.totalJobs = result.totalJobs;
        this.pendingJobs = result.pendingJobs;
        this.delayedJobs = result.delayedJobs;
        this.completedJobs = result.completedJobs;
        this.dataSource = new MatTableDataSource(<any> result.jobs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
      
    }
  }


}
