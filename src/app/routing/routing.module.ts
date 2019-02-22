import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { SwichComponent } from './swich/swich.component';

@NgModule({
  declarations: [SwichComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
