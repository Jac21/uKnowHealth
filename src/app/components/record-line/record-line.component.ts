import { Component, Input } from '@angular/core';
import { RecordLine } from './record-line';
@Component({
  selector: 'app-record-line',
  templateUrl: './record-line.component.html',
  styleUrls: ['./record-line.component.css']
})
export class RecordLineComponent {
  @Input() record: RecordLine;

  constructor() { }

}
