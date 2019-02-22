import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from '../layout/normal/normal.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { IdentityGuard } from '../core/guard/identity.guard';
import { SwichComponent } from './swich/swich.component';

const routes: Routes = [
  {
    path: '',
    component: NormalComponent,
    canActivate:[IdentityGuard],
    children:[
      {
        path:'',
        component:SwichComponent
      },
      {
        path:'admin',
        canActivateChild:[IdentityGuard],
        loadChildren:'./admin/admin.module#AdminModule'
      },
      {
        path:'member',
        canActivateChild:[IdentityGuard],
        loadChildren:'./member/member.module#MemberModule'
      }
    ]
  },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: '',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
