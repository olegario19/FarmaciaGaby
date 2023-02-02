import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoProvedorComponent } from './catalogo-provedor.component';

describe('CatalogoProvedorComponent', () => {
  let component: CatalogoProvedorComponent;
  let fixture: ComponentFixture<CatalogoProvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoProvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
