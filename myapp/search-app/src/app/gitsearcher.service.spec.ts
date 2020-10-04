import { TestBed } from '@angular/core/testing';

import { GitsearcherService } from './gitsearcher.service';

describe('GitsearcherService', () => {
  let service: GitsearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
