import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { QueryGroup } from '../models/query-format.model';

@Component({
  selector: '.app-query-menu',
  templateUrl: './query-menu.component.html',
  styleUrls: ['./query-menu.component.css']
})
export class QueryMenuComponent implements OnInit {
  @Output() menuEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() group: QueryGroup;
  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    // if (this.parent === 'app') {
      this.items = [
        {
          label: 'Or',
          command: (event) => { this.orClick(); },
          items: [
            {
              label: 'Broaden your search with multiple terms. Example: "network administrator" OR "network manager"'
            }
          ]
        },
        {
          label: 'And',
          command: (event) => { this.andClick(); },
          items: [
            {
              label: 'Include two search terms. Example network AND administrator'
            }
          ]
        },
        {
          label: 'Not',
          command: (event) => { this.notClick(); },
          items: [
            {
              label: ' Use to exclude a specific term. Example: administrator NOT manager'
            }
          ]
        },
        {
          label: 'Group',
          items: [
            {
              label: 'Or',
              command: (event) => { this.groupOrClick(); },
              items: [
                {
                  label: 'Broaden your search with multiple terms. Example: "network administrator" OR "network manager"'
                }
              ]
            },
            {
              label: 'And',
              command: (event) => { this.groupAndClick(); },
              items: [
                {
                  label: 'Include two search terms. Example network AND administrator'
                }
              ]
            },
          ]
        },
        {
          label: 'From',
          command: (event) => { this.fromClick(); },
        },
        {
          label: 'To',
          command: (event) => { this.toClick(); },
        },
        {
          label: 'In'
        }
      ];
    // } else {
    //   this.items = [
    //     {
    //       label: 'And',
    //       command: (event) => { this.andClick(); },
    //       items: [
    //         {
    //           label: 'Include two search terms. Example network AND administrator'
    //         }
    //       ]
    //     }
    //   ];
    // }
  }

  orClick() {
    this.menuEvent.emit('or');
  }

  notClick() {
    this.menuEvent.emit('not');
  }

  groupOrClick() {
    this.menuEvent.emit('groupOr');
  }

  andClick() {
    this.menuEvent.emit('and');
  }

  groupAndClick() {
    this.menuEvent.emit('groupAnd');
  }

  fromClick() {
    this.menuEvent.emit('from');
  }

  toClick() {
    this.menuEvent.emit('to');
  }
}
