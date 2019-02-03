import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';


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
  isAdmin = false;

  constructor(private auth: AuthService, private router: Router) { 
    this.displayedColumns = ['username', 'email', 'status', 'role', 'action'];
    if(localStorage.getItem('userRole') == 'admin') {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
      this.router.navigate(['/']);
    }
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

  changeStatus(id:string, status:string) {
    this.auth.changeStatus(id, status)
    .subscribe(res => {
      this.auth.getUsers().subscribe(users => {
        if(!users) {
          return;
        }
        this.dataSource = new MatTableDataSource(<any> users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  changeRole(id, role:string) {
    this.auth.changeRole(id, role)
    .subscribe(res => {
      this.auth.getUsers().subscribe(users => {
        if(!users) {
          return;
        }
        this.dataSource = new MatTableDataSource(<any> users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  delteUser(id) {
    this.auth.deleteUser(id)
    .subscribe((res) => {
      this.auth.getUsers().subscribe(users => {
        if(!users) {
          return;
        }
        this.dataSource = new MatTableDataSource(<any> users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    });
  }

}
