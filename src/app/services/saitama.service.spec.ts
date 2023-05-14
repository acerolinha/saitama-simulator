import { TestBed } from '@angular/core/testing';

import { SaitamaService } from './saitama.service';

describe('SaitamaService', () => {
  let service: SaitamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaitamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
