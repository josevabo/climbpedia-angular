import { TestBed } from '@angular/core/testing';

import { ViasService } from './vias.service';

describe('ViasService', () => {
  let service: ViasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
