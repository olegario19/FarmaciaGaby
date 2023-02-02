import { TestBed } from '@angular/core/testing';

import { HoraEntradaService } from './hora-entrada.service';

describe('HoraEntradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoraEntradaService = TestBed.get(HoraEntradaService);
    expect(service).toBeTruthy();
  });
});
