import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasRealizadosComponent } from './ventas-realizados.component';

describe('VentasRealizadosComponent', () => {
  let component: VentasRealizadosComponent;
  let fixture: ComponentFixture<VentasRealizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasRealizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
