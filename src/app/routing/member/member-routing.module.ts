import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MemberMainComponent } from './member-main/member-main.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:MemberMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
