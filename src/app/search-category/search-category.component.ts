import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: '.app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  categories: SelectItem[];
  selectedCategories: City[];

  constructor() {
    this.categories = [
      { label: 'Image', value: { id: 2, name: 'Image', code: 'RM' } },
      { label: 'News', value: { id: 3, name: 'Newsn', code: 'LDN' } },
      { label: 'Video', value: { id: 4, name: 'Video', code: 'IST' } },
      { label: 'Books', value: { id: 5, name: 'Books', code: 'PRS' } }
    ];
  }

  ngOnInit() {
  }

}

interface City {
  name: string;
  code: string;
}
