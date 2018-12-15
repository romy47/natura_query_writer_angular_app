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
  @Input() selectedCategories: QueryGroup[];
  privatelySelectedCategories: QueryGroup[];

  constructor() {
    const cate1 = new QueryGroup();
    cate1.label = 'Image';
    const cate2 = new QueryGroup();
    cate2.label = 'News';
    const cate3 = new QueryGroup();
    cate3.label = 'Video';
    const cate4 = new QueryGroup();
    cate4.label = 'Book';
    this.categories = [
      { label: 'Image', value: cate1 },
      { label: 'News', value: cate2 },
      { label: 'Video', value: cate3 },
      { label: 'Book', value: cate4 }
    ];
  }

  ngOnInit() {
  }

  onSelectChange() {
    this.selectedCategories.length = 0;

    this.privatelySelectedCategories.forEach(element => {
      // tslint:disable-next-line:max-line-length
      if (this.selectedCategories.filter(item => item.label.toLowerCase() === element.label.toLowerCase()).length === 0) {
        this.selectedCategories.push(element);
      }
    });
  }

}

interface City {
  name: string;
  code: string;
}
