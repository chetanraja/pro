import { TestBed } from '@angular/core/testing';

import { EarringsService } from './earrings.service';

describe('EarringsService', () => {
  let service: EarringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
