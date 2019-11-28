import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgencyPageComponent } from './travel-agency-page.component';

describe('TravelAgencyPageComponent', () => {
  let component: TravelAgencyPageComponent;
  let fixture: ComponentFixture<TravelAgencyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAgencyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
