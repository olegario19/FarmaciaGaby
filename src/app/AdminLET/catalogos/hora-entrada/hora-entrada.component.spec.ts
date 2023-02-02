import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraEntradaComponent } from './hora-entrada.component';

describe('HoraEntradaComponent', () => {
  let component: HoraEntradaComponent;
  let fixture: ComponentFixture<HoraEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
