import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  ngOnInit(): void {
  }
  searchCtrl: FormControl;
  filteredStates: any;

  states = [
    'Blood Pressure',
    'Cardiac',
    'Cholesterol',
    'Glucose Levels',
    'Triglycerides',
  ];

  constructor() {
    this.searchCtrl = new FormControl();
    this.filteredStates = this.searchCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }
}
