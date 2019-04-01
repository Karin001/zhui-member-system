import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryMainComponent } from './diary-main/diary-main.component';

const routes: Routes = [
  {path:'main',component:DiaryMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
