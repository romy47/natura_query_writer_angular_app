import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from 'src/app/search-service.service';
import { AndTermsComponent } from './and-terms/and-terms.component';
import { QueryFormatModel, OrTerm, AndTerm } from 'src/app/models/query-format.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRef: any;
  public queryStructure: QueryFormatModel = new QueryFormatModel();
  constructor() {
    this.createOrTerm();
  }

  createComponent() {
    this.queryStructure.orTerms[0].andTerms.push(new AndTerm());
  }

  menuEvent(event: string) {
    switch (event.toLocaleLowerCase()) {
      case 'or':
        this.createOrTerm();
    }
  }

  createOrTerm() {
    const and = new AndTerm();
    and.index = 0;
    const or = new OrTerm();
    or.andTerms.push(and);
    this.queryStructure.orTerms.push(or);
    this.queryStructure.orTerms.forEach((element, index) => {
      element.index = index;
    });
    console.log(this.queryStructure);
  }
}
