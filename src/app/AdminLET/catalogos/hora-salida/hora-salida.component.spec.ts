import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraSalidaComponent } from './hora-salida.component';

describe('HoraSalidaComponent', () => {
  let component: HoraSalidaComponent;
  let fixture: ComponentFixture<HoraSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
