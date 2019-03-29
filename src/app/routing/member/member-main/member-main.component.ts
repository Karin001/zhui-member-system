import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { BottomSheetComponent } from 'src/app/shared/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-member-main',
  templateUrl: './member-main.component.html',
  styleUrls: ['./member-main.component.scss']
})
export class MemberMainComponent implements OnInit {

  constructor(
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  onClick(event) {
    this.openBottomSheet();
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        menu: [
          { name: '写周记', method: this.openDialog.bind(this) },
          { name: '挂假', method: this.openDialog.bind(this) }
      ],
        host:this,
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { name: 'zhpouji', animal: 'zhouji' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}


