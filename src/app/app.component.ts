import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from 'src/app/search-service.service';
import { QueryFormatModel, QueryGroup } from 'src/app/models/query-format.model';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRef: any;
  public queryStructure: QueryFormatModel = new QueryFormatModel();
  constructor() {
    this.createFirstGroup();
  }

  createComponent() {
    this.queryStructure.queryGroups.push(new QueryGroup());
  }

  groupEventhandle(event: any) {
    switch (event.event.toLocaleLowerCase()) {
      case 'or':
        this.createOrTerm();
        break;
      case 'and':
        this.createAndTerm();
        break;
    }
  }

  createFirstGroup() {
    const group = new QueryGroup();
    group.type = 'pilot';
    group.verticalIndex = 0;
    group.horizontalIndex = 0;
    this.queryStructure.queryGroups.push(group);
    console.log(this.queryStructure);
  }

  createOrTerm() {
    const group = new QueryGroup();
    group.type = 'or';
    group.verticalIndex = 0;
    group.horizontalIndex = this.queryStructure.queryGroups.length;
    this.queryStructure.queryGroups.push(group);
  }

  createAndTerm() {
    const group = new QueryGroup();
    group.type = 'and';
    group.verticalIndex = 0;
    group.horizontalIndex = this.queryStructure.queryGroups.length;
    this.queryStructure.queryGroups.push(group);
  }

}
