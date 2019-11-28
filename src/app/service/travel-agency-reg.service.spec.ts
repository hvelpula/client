import { TestBed } from '@angular/core/testing';

import { TravelAgencyRegService } from './travel-agency-reg.service';

describe('TravelAgencyRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelAgencyRegService = TestBed.get(TravelAgencyRegService);
    expect(service).toBeTruthy();
  });
});
