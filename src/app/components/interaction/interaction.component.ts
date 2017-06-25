import { Component, OnInit } from '@angular/core';
import {RecordLine} from '../record-line/record-line';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  private json = [
    {
      name: "cholesterol",
      value: 220,
      min: 150,
      max: 300,
      step: 1,
      description: "some description"
    },
    {
      name: "hdl",
      value: 43,
      min: 10,
      max: 80,
      step: 1,
      description: "some description"
    },
    {
      name: "ldl",
      value: 60,
      min: 50,
      max: 250,
      step: 1,
      description: "some description"
    },
    {
      name: "triglycerides",
      value: 50,
      min: 0,
      max: 150,
      step: 1,
      description: "some description"
    }
  ]

  private recordLines = [];

  private age: number = 0;
  private gender: number = 0;
  private showResources = false;

  constructor() { }

  ngOnInit() {
    for(var j of this.json) {
      this.recordLines.push(new RecordLine(j));
    }
  }

  ageChanged(age: number) {
    this.age = age;
  }

  genderChanged(gender: number) {
    this.gender = gender;
  }

  onClick() {
    this.showResources = !this.showResources;
  }
}
