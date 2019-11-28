import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBookingsComponent } from './travel-bookings.component';

describe('TravelBookingsComponent', () => {
  let component: TravelBookingsComponent;
  let fixture: ComponentFixture<TravelBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
