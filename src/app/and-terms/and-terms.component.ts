import { Component, OnInit, Input } from '@angular/core';
import { AndTerm } from '../models/query-format.model';

@Component({
  selector: '.app-and-terms',
  templateUrl: './and-terms.component.html',
  styleUrls: ['./and-terms.component.css']
})
export class AndTermsComponent implements OnInit {
  @Input() andTerm: AndTerm;
  constructor() { }

  ngOnInit() {
  }

}
