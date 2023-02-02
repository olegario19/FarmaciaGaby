import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContieneCcategoriasComponent } from './contiene-ccategorias.component';

describe('ContieneCcategoriasComponent', () => {
  let component: ContieneCcategoriasComponent;
  let fixture: ComponentFixture<ContieneCcategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContieneCcategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContieneCcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
