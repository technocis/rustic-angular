import { TestBed } from '@angular/core/testing';

import { RusticService } from './rustic.service';

describe('RusticService', () => {
  let service: RusticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RusticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
