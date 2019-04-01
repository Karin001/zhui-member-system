import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticsRoutingModule } from './statics-routing.module';
import { StaticsMainComponent } from './statics-main/statics-main.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StaticsMainComponent],
  imports: [
    CommonModule,
    StaticsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class StaticsModule { }
