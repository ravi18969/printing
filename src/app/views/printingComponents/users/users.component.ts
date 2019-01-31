import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { AuthService } from 'app/shared/services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns;
  dataSource;

  constructor(private auth: AuthService) { 
    this.displayedColumns = ['username', 'email', 'status', 'role', 'action'];
  }

  ngOnInit() {
    this.auth.getUsers().subscribe(users => {
      if(!users) {
        return;
      }
      this.dataSource = new MatTableDataSource(<any> users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
