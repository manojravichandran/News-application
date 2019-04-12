import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianPage } from './indian.page';

describe('IndianPage', () => {
  let component: IndianPage;
  let fixture: ComponentFixture<IndianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
