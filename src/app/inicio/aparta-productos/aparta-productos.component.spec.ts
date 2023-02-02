import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartaProductosComponent } from './aparta-productos.component';

describe('ApartaProductosComponent', () => {
  let component: ApartaProductosComponent;
  let fixture: ComponentFixture<ApartaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
