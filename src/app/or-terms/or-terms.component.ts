import { Component, OnInit, Input } from '@angular/core';
import { OrTerm, AndTerm } from '../models/query-format.model';

@Component({
  selector: '.app-or-terms',
  templateUrl: './or-terms.component.html',
  styleUrls: ['./or-terms.component.css']
})
export class OrTermsComponent implements OnInit {
  @Input() orTerm: OrTerm;
  constructor() { }

  ngOnInit() {
    console.log(this.orTerm);
  }

  menuEvent(event: string) {
    switch (event.toLocaleLowerCase()) {
      case 'and':
        this.createAndTerm();
    }
  }

  createAndTerm() {
    const and = new AndTerm();
    this.orTerm.andTerms.push(and);
    this.orTerm.andTerms.forEach((element, index) => {
      element.index = index;
    });
    console.log(this.orTerm);
  }
}
