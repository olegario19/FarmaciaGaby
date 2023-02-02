import { TestBed, async, inject } from '@angular/core/testing';

import { GuardsAdministradorGuard } from './guards-administrador.guard';

describe('GuardsAdministradorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsAdministradorGuard]
    });
  });

  it('should ...', inject([GuardsAdministradorGuard], (guard: GuardsAdministradorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
