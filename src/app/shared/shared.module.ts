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
  MatSelectModule,
  MatBottomSheetModule,
  MatDialogModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AutoComplateComponent } from './own/auto-complate/auto-complate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCalendarModule } from './my-calendar/my-calendar.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
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
  MatSelectModule,
  MatBottomSheetModule,
  MatDialogModule,
]
@NgModule({
  entryComponents:[BottomSheetComponent,DialogComponent],
  declarations: [AutoComplateComponent, BottomSheetComponent, DialogComponent],
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
    MyCalendarModule,
    BottomSheetComponent,
    DialogComponent
  ]
})
export class SharedModule { }
