import { TestBed } from '@angular/core/testing';

import { GitsearchService } from './gitsearch.service';

describe('GitsearchService', () => {
  let service: GitsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
