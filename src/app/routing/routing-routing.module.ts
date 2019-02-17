import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from '../layout/normal/normal.component';

const routes: Routes = [
  {
    path:'',
    component:NormalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
