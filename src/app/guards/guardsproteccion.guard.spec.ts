import { TestBed, async, inject } from '@angular/core/testing';

import { GuardsproteccionGuard } from './guardsproteccion.guard';

describe('GuardsproteccionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsproteccionGuard]
    });
  });

  it('should ...', inject([GuardsproteccionGuard], (guard: GuardsproteccionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
