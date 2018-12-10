import { Component, OnInit, Input } from '@angular/core';
import { OrTerm } from '../models/query-format.model';

@Component({
  selector: '.app-or-terms',
  templateUrl: './or-terms.component.html',
  styleUrls: ['./or-terms.component.css']
})
export class OrTermsComponent implements OnInit {
  @Input() orTerm: OrTerm;
  constructor() { }

  ngOnInit() {
    console.log(this.orTerm)
  }

}
