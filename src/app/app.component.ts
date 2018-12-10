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
  this.queryStructure.orTerms.push(new OrTerm());
  this.queryStructure.orTerms[0].andTerms.push(new AndTerm());
  console.log(this.queryStructure);
  }

  createComponent() {
    this.queryStructure.orTerms[0].andTerms.push(new AndTerm());
  }
}
