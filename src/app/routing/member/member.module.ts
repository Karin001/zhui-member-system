import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
