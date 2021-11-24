import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Places4x4Component } from './places4x4.component';

describe('Places4x4Component', () => {
  let component: Places4x4Component;
  let fixture: ComponentFixture<Places4x4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Places4x4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Places4x4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
