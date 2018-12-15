import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: '.app-query-menu',
  templateUrl: './query-menu.component.html',
  styleUrls: ['./query-menu.component.css']
})
export class QueryMenuComponent implements OnInit {
  @Output() menuEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() parent = 'app';
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
        },
        {
          label: 'To'
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

  groupOrClick() {
    console.log('groupOr');
    this.menuEvent.emit('groupOr');
  }

  andClick() {
    this.menuEvent.emit('and');
  }

  groupAndClick() {
    this.menuEvent.emit('groupAnd');
  }
}
