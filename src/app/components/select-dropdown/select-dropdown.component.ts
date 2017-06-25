import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent implements OnInit {

  constructor() { }

  private genders = [
    {value: '0', viewValue: 'All'},
    {value: '-1.2', viewValue: 'Female'},
    {value: '1.9', viewValue: 'Male'}
  ]

  private ages = [
    {value: '0', viewValue: 'All'},
    {value: '1', viewValue: 'Under 18 years'},
    {value: '2', viewValue: '18 to 24 years'},
    {value: '3', viewValue: '25 to 34 years'},
    {value: '4', viewValue: '35 to 44 years'},
    {value: '5', viewValue: '45 to 54 years'},
    {value: '6', viewValue: 'Age 65 or older'},
  ]

  private genderValue = 0;
  private ageValue = 0;
  @Output() genderEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() ageEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }
  
  onAgeChanged() {
    this.ageEmitter.emit(this.ageValue);
  }

  onGenderChanged() {
    this.genderEmitter.emit(this.genderValue);
  }
}
