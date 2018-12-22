import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from 'src/app/search-service.service';
import { QueryGroup } from '../models/query-format.model';

@Component({
  selector: '.app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  categories: SelectItem[];
  @Input() selectedCategories: QueryGroup[] = [];
  privatelySelectedCategories: QueryGroup[] = [];

  constructor() {
  }

  ngOnInit() {
    const cate0 = new QueryGroup();
    cate0.label = 'Books';
    const cate1 = new QueryGroup();
    cate1.label = 'Image';
    const cate2 = new QueryGroup();
    cate2.label = 'News';
    const cate3 = new QueryGroup();
    cate3.label = 'Video';
    this.categories = [
      { label: 'Books', value: cate0 },
      { label: 'Image', value: cate1 },
      { label: 'News', value: cate2 },
      { label: 'Video', value: cate3 }
    ];

    this.categories.forEach(element => {
      this.selectedCategories.push(element.value);
      this.privatelySelectedCategories.push(element.value);
    });
  }

  onSelectChange(val: any) {
    // console.log(val.value);
    this.selectedCategories.length = 0;

    if (this.privatelySelectedCategories.length === 0) {
      this.privatelySelectedCategories = [];
      this.categories.forEach(element => {
        this.selectedCategories.push(element.value);
        this.privatelySelectedCategories.push(element.value);
      });
    } else {
      this.privatelySelectedCategories.forEach(element => {
        if (this.selectedCategories.filter(item => item.label.toLowerCase() === element.label.toLowerCase()).length === 0) {
          this.selectedCategories.push(element);
        }
      });
    }
  }
}

interface City {
  name: string;
  code: string;
}
