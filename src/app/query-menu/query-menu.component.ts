import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { QueryGroup, QueryFormatModel } from '../models/query-format.model';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: '.app-query-menu',
  templateUrl: './query-menu.component.html',
  styleUrls: ['./query-menu.component.css']
})
export class QueryMenuComponent implements OnInit {
  @Output() menuEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() group: QueryGroup;
  rootObject: QueryFormatModel;
  constructor(private searchService: SearchServiceService) { }

  items: MenuItem[];

  ngOnInit() {
    this.searchService.rootDataObject$.subscribe(root => {
      if (root) {
        this.rootObject = root;
        console.log('root-', root);
      }
    });
    this.buildMenu();
  }

  buildMenu() {
    this.items = [
      {
        label: 'In'
      }
    ];

    if (this.isDateFilterable()) {
      const date = {
        label: 'Date',
        items: [] = []
      };

      if (this.isFromDateFilterable()) {
        date.items.push({
          label: 'From',
          command: (event) => { this.fromClick(); },
        });
      }
      if (this.isToDateFilterable()) {
        date.items.push({
          label: 'To',
          command: (event) => { this.toClick(); },
        });
      }
      this.items.push(date);
    }

    if (this.isQueryAble()) {
      this.items.push({
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
        });
    }
    if (this.isGroupable()) {
      this.items.push({
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
      });
    }
    if (this.isDeletable()) {
      this.items.push({
        label: 'Delete',
        command: (event) => { this.deleteClick(); }
      });
    }
  }

  orClick() {
    this.menuEvent.emit('or');
  }

  toggleMenu(event: any) {
    console.log(this.group);
    this.buildMenu();
  }

  notClick() {
    this.menuEvent.emit('not');
  }

  deleteClick() {
    this.menuEvent.emit('delete');
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

  isDeletable(): boolean {
    return this.group.type !== 'pilot';
  }

  isGroupable(): boolean {
    return this.group.isSingle;
  }

  isQueryAble(): boolean {
    return (this.group.type !== 'date' && this.group.type !== 'from' && this.group.type !== 'to');
  }

  isDateFilterable(): boolean {
    return (this.group.verticalIndex === 0) && (this.rootObject.date.length < 2);
  }

  isFromDateFilterable(): boolean {
    return (this.rootObject.date.findIndex(date => date.type === 'from') === -1);
  }

  isToDateFilterable(): boolean {
    return (this.rootObject.date.findIndex(date => date.type === 'to') === -1);
  }
}
