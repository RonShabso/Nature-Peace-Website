import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingPlacesComponent } from './hiking-places.component';

describe('HikingPlacesComponent', () => {
  let component: HikingPlacesComponent;
  let fixture: ComponentFixture<HikingPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
