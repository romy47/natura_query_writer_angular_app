import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryGroup } from '../models/query-format.model';

@Component({
  selector: '.app-date-term',
  templateUrl: './date-term.component.html',
  styleUrls: ['./date-term.component.css']
})
export class DateTermComponent implements OnInit {
  @Input() group: QueryGroup;
  @Output() groupEvent: EventEmitter<{ group: QueryGroup, event: string }> = new EventEmitter<{ group: QueryGroup, event: string }>();
  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }

  menuEvent(event: string) {
    this.groupEvent.emit({ group: this.group, event: event });
  }

}
