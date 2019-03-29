import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { TestComponent } from './test/test.component';
import { MemberMainComponent } from './member-main/member-main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TestComponent, MemberMainComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ]
})
export class MemberModule { }
