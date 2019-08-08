import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallPage } from './viewall.page';

describe('ViewallPage', () => {
  let component: ViewallPage;
  let fixture: ComponentFixture<ViewallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
