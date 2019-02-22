import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routes: Routes = [
  {path:'',redirectTo:'projectlist',pathMatch:'full'},
  {path:'projectlist',component:ProjectlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
