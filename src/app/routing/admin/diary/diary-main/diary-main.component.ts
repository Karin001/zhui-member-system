import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {  DiaryDialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.scss']
})
export class DiaryMainComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DiaryDialogComponent, {
      width: '400px',
      height:'500px',
      data: { name: 'zhpouji', animal: 'zhouji' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
