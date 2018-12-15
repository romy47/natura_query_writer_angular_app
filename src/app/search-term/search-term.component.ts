import { Component, OnInit, Input } from '@angular/core';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: '.app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.css']
})
export class SearchTermComponent implements OnInit {
  @Input() text: string;
  results: string[];
  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

  search(event) {
    console.log(event.query);
    this.searchService.getSearchResult(event.query).subscribe(data => {
      this.results = data[1];
    });
  }

}
