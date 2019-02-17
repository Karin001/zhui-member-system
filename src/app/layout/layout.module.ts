import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComponent } from './normal/normal.component';
import { PassportComponent } from './passport/passport.component';
import { SharedModule } from '../shared/shared.module';
import { NormalSidebarComponent } from './normal-sidebar/normal-sidebar.component';

@NgModule({
  declarations: [NormalComponent, PassportComponent, NormalSidebarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[NormalComponent]
})
export class LayoutModule { }
