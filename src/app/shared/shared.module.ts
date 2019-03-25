import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatOptionModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AutoComplateComponent } from './own/auto-complate/auto-complate.component';
import { ReactiveFormsModule } from '@angular/forms';
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
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatOptionModule,
  MatExpansionModule,
]
@NgModule({
  declarations: [AutoComplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
    AutoComplateComponent,
    RouterModule
  ]
})
export class SharedModule { }
