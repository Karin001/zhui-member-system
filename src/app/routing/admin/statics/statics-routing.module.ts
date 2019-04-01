import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticsMainComponent } from './statics-main/statics-main.component';

const routes: Routes = [
  {path:'main',component: StaticsMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticsRoutingModule { }
