import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContieneCPComponent } from './contiene-cp.component';

describe('ContieneCPComponent', () => {
  let component: ContieneCPComponent;
  let fixture: ComponentFixture<ContieneCPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContieneCPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContieneCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
