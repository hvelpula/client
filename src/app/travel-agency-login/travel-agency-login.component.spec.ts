import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgencyLoginComponent } from './travel-agency-login.component';

describe('TravelAgencyLoginComponent', () => {
  let component: TravelAgencyLoginComponent;
  let fixture: ComponentFixture<TravelAgencyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAgencyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgencyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
