import { Component, Input, OnChanges } from '@angular/core';
import { RecordLine } from './record-line';
@Component({
  selector: 'app-record-line',
  templateUrl: './record-line.component.html',
  styleUrls: ['./record-line.component.css']
})
export class RecordLineComponent implements OnChanges {
  

  @Input() record: RecordLine;
  @Input() age: number;
  @Input() gender: number;
  private actualValue: number = 0;
  ngOnChanges(changes): void {
    this.actualValue = this.record.value + this.gender * 10 + this.age * 2.8;
  }

  constructor() { }

}
