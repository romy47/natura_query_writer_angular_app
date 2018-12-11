import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryMenuComponent } from './query-menu.component';

describe('QueryMenuComponent', () => {
  let component: QueryMenuComponent;
  let fixture: ComponentFixture<QueryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
