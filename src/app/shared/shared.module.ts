import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
   MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule,
  } from '@angular/material';
import { RouterModule } from '@angular/router';
const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    ...materialModules,
  ],
  exports:[
    ...materialModules,
    RouterModule
  ]
})
export class SharedModule { }
