import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndTermsComponent } from './and-terms.component';

describe('AndTermsComponent', () => {
  let component: AndTermsComponent;
  let fixture: ComponentFixture<AndTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
