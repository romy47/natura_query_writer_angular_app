import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from 'src/app/search-service.service';
import { QueryFormatModel, QueryGroup } from 'src/app/models/query-format.model';
import { forEach } from '@angular/router/src/utils/collection';
import { TreeDataModel } from './models/tree-data.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRef: any;
  treeData: QueryGroup[] = [];
  public queryStructure: QueryFormatModel = new QueryFormatModel();
  constructor() {
    this.createFirstGroup();
    const parent = new QueryGroup();
    parent.label = 'Your Search Query';
    const child1 = new QueryGroup();
    child1.label = 'Category';
    child1.children = this.queryStructure.categories;
    const child2 = new QueryGroup();
    child2.label = 'Search Terms';
    child2.children = this.queryStructure.queryGroups;
    parent.queryGroups.push(child1);
    parent.queryGroups.push(child2);
    this.treeData.push(parent);
  }

  createComponent() {
    this.queryStructure.queryGroups.push(new QueryGroup());
  }

  groupEventhandle(event: any) {
    switch (event.event.toLocaleLowerCase()) {
      case 'or':
        this.createOrTerm(event.group);
        break;
      case 'and':
        this.createAndTerm(event.group);
        break;
      case 'from':
        this.createFromTerm(event.group);
        break;
      case 'to':
        this.createToTerm(event.group);
        break;
    }
  }

  createFirstGroup() {
    const group = new QueryGroup();
    group.type = 'pilot';
    group.verticalIndex = 0;
    group.horizontalIndex = 0;
    this.queryStructure.queryGroups.push(group);
  }

  createOrTerm(prevGroup: any) {
    const group = new QueryGroup();
    group.type = 'or';
    group.verticalIndex = 0;
    group.horizontalIndex = this.queryStructure.queryGroups.length;
    const index = this.queryStructure.queryGroups.findIndex(item => item.id === prevGroup.id);
    this.queryStructure.queryGroups.splice(index + 1, 0, group);
  }

  createAndTerm(prevGroup: any) {
    const group = new QueryGroup();
    group.type = 'and';
    group.verticalIndex = 0;
    group.horizontalIndex = this.queryStructure.queryGroups.length;
    const index = this.queryStructure.queryGroups.findIndex(item => item.id === prevGroup.id);
    this.queryStructure.queryGroups.splice(index + 1, 0, group);
  }

  createFromTerm(prevGroup: any) {
    this.queryStructure.dateFrom = new QueryGroup();
    this.queryStructure.dateFrom.type = 'from';
    this.queryStructure.dateFrom.verticalIndex = 0;
    this.queryStructure.dateFrom.horizontalIndex = 997;

    const child3 = new QueryGroup();
    child3.label = 'From Date';
    child3.children.push(this.queryStructure.dateFrom);
    this.treeData[0].children.push(child3);
  }

  createToTerm(prevGroup: any) {
    this.queryStructure.dateTo = new QueryGroup();
    this.queryStructure.dateTo.type = 'to';
    this.queryStructure.dateTo.verticalIndex = 0;
    this.queryStructure.dateTo.horizontalIndex = 998;

    const child4 = new QueryGroup();
    child4.label = 'To Date';
    child4.children.push(this.queryStructure.dateTo);
    this.treeData[0].children.push(child4);
  }

}
