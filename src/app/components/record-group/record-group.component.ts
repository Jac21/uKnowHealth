import { Component, Input } from '@angular/core';
import { RecordLine } from '../record-line/record-line';

@Component({
  selector: 'app-record-group',
  templateUrl: './record-group.component.html',
  styleUrls: ['./record-group.component.css']
})
export class RecordGroupComponent {

  @Input() recordLines: RecordLine[];
  @Input() age: number;
  @Input() gender: number;

  constructor() { }

}
