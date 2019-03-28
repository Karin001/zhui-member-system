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
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AutoComplateComponent } from './own/auto-complate/auto-complate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalendarModule } from './my-calendar/my-calendar.module';
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
  MatSelectModule
]
@NgModule({
  declarations: [AutoComplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule,
    ...materialModules,
    MyCalendarModule
  ],
  exports: [
    ...materialModules,
    AutoComplateComponent,
    RouterModule,
    MyCalendarModule
  ]
})
export class SharedModule { }
