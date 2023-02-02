import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EprincipalComponent } from './eprincipal.component';

describe('EprincipalComponent', () => {
  let component: EprincipalComponent;
  let fixture: ComponentFixture<EprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
