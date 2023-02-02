import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPComponent } from './contenido-p.component';

describe('ContenidoPComponent', () => {
  let component: ContenidoPComponent;
  let fixture: ComponentFixture<ContenidoPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
