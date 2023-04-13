import { TestBed } from '@angular/core/testing';

import { WorkZoneService } from './work-zone.service';

describe('WorkZoneService', () => {
  let service: WorkZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
