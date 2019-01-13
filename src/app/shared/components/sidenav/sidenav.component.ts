import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogboxComponent } from '../../../views/others/dialogbox/dialogbox.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.template.html'
})
export class SidenavComponent {
  @Input('items') public menuItems: any[] = [];
  @Input('hasIconMenu') public hasIconTypeMenuItem: boolean;
  @Input('iconMenuTitle') public iconTypeMenuTitle: string;

  constructor(private dialog: MatDialog) {}
  ngOnInit() {}

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };


    const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    ); 
    
    
  }



}