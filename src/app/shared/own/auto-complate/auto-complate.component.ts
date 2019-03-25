
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface State {
  staffId: string;
  staffName: string;

}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'app-auto-complate',
  templateUrl: './auto-complate.component.html',
  styleUrls: ['./auto-complate.component.scss']
})
export class AutoComplateComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  @Output() selectedStaff = new EventEmitter();

  states: State[] = [
    {
      staffName: '张三',
      staffId: '23423sf',
    },
    {
      staffName: '张无忌',
      staffId: 'sfsdf234'
    },
    {
      staffName: '李二狗',
      staffId: '2342323sf',
    },
    {
      staffName: '李凤凰',
      staffId: 'sfsdwrewrf234'
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.staffName.toLowerCase().indexOf(filterValue) === 0);
  }

  onclick(state) {
    console.log('state',state);

    this.selectedStaff.emit({...state});
    this.stateCtrl.setValue('');
  }
}

