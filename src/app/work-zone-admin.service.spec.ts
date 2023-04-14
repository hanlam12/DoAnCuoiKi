import { TestBed } from '@angular/core/testing';

import { WorkZoneAdminService } from './work-zone-admin.service';

describe('WorkZoneAdminService', () => {
  let service: WorkZoneAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkZoneAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
