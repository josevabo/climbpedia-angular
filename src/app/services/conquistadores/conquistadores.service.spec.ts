import { TestBed } from '@angular/core/testing';

import { ConquistadoresService } from './conquistadores.service';

describe('ConquistadoresService', () => {
  let service: ConquistadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConquistadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
