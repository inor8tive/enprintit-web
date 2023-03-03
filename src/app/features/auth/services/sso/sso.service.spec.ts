import { TestBed } from '@angular/core/testing';

import { SSOService } from './s-s-o.service';

describe('SsoService', () => {
  let service: SSOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
