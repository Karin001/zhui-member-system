import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryMainComponent } from './diary-main/diary-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiaryDialogComponent } from './dialog/dialog.component';

@NgModule({
  entryComponents:[DiaryDialogComponent],
  declarations: [DiaryMainComponent,DiaryDialogComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    SharedModule
  ]
})
export class DiaryModule { }
