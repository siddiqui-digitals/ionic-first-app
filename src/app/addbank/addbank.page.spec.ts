import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbankPage } from './addbank.page';

describe('AddbankPage', () => {
  let component: AddbankPage;
  let fixture: ComponentFixture<AddbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbankPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
