import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryGroup } from '../models/query-format.model';

@Component({
  selector: '.app-group-terms',
  templateUrl: './group-terms.component.html',
  styleUrls: ['./group-terms.component.css']
})
export class GroupTermsComponent implements OnInit {
  @Input() group: QueryGroup;
  @Output() groupEvent: EventEmitter<{ group: QueryGroup, event: string }> = new EventEmitter<{ group: QueryGroup, event: string }>();
  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }

  menuEvent(event: string) {
    switch (event.toLocaleLowerCase()) {
      case 'and':
        this.groupEvent.emit({ group: this.group, event: event });
        break;
      case 'or':
        this.groupEvent.emit({ group: this.group, event: event });
        break;
      case 'groupand':
        this.groupAndTerm();
        break;
      case 'groupor':
        this.groupOrTerm();
        break;
    }
  }

  groupEventHandle(event: any) {
    switch (event.event.toLocaleLowerCase()) {
      case 'and':
        this.createAndTerm(event.group);
        break;
      case 'or':
        this.createOrTerm(event.group);
        break;
    }
  }

  groupOrTerm() {
    this.group.isSingle = false;
    const group1 = new QueryGroup();
    group1.type = 'pilot';
    group1.verticalIndex = this.group.verticalIndex + 1;
    group1.horizontalIndex = this.group.queryGroups.length;
    const group2 = new QueryGroup();
    group2.type = 'or';
    group2.verticalIndex = this.group.verticalIndex + 1;
    group2.horizontalIndex = this.group.queryGroups.length;
    this.group.queryGroups.push(group1);
    this.group.queryGroups.push(group2);
  }

  groupAndTerm() {
    this.group.isSingle = false;
    const group1 = new QueryGroup();
    group1.type = 'pilot';
    group1.verticalIndex = this.group.verticalIndex + 1;
    group1.horizontalIndex = this.group.queryGroups.length;
    const group2 = new QueryGroup();
    group2.type = 'and';
    group2.verticalIndex = this.group.verticalIndex + 1;
    group2.horizontalIndex = this.group.queryGroups.length;
    this.group.queryGroups.push(group1);
    this.group.queryGroups.push(group2);
  }

  createAndTerm(prevGroup: any) {
    const group = new QueryGroup();
    group.type = 'and';
    group.verticalIndex = this.group.verticalIndex + 1;
    group.horizontalIndex = this.group.queryGroups.length;
    const index = this.group.queryGroups.findIndex(item => item.id === prevGroup.id);
    this.group.queryGroups.splice(index + 1, 0, group);
  }

  createOrTerm(prevGroup: any) {
    const group = new QueryGroup();
    group.type = 'or';
    group.verticalIndex = this.group.verticalIndex + 1;
    group.horizontalIndex = this.group.queryGroups.length;
    const index = this.group.queryGroups.findIndex(item => item.id === prevGroup.id);
    this.group.queryGroups.splice(index + 1, 0, group);
  }
}
