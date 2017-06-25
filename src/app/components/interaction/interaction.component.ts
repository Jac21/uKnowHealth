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
      name: "Cholesterol",
      value: 220,
      min: 150,
      max: 300,
      step: 1,
      description: "Cholesterol is not “bad”: your body needs it to build cells. But too much can be a problem."
    },
    {
      name: "HDL",
      value: 43,
      min: 10,
      max: 80,
      step: 1,
      description: "Think of HDL as the “healthy” cholesterol, so higher levels are better."
    },
    {
      name: "LDL",
      value: 60,
      min: 50,
      max: 250,
      step: 1,
      description: "LDL cholesterol is called “bad” cholesterol. Think of it as less desirable or even lousy cholesterol, because it contributes to fatty buildups in arteries."
    },
    {
      name: "Triglycerides",
      value: 50,
      min: 0,
      max: 150,
      step: 1,
      description: "Triglycerides are the most common type of fat in the body; they store excess energy from your diet."
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
