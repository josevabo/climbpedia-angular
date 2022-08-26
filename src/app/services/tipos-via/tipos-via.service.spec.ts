import { TestBed } from '@angular/core/testing';

import { TiposViaService } from './tipos-via.service';

describe('TiposViaService', () => {
  let service: TiposViaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposViaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
