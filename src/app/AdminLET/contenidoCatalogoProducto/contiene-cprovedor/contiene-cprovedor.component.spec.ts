import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContieneCProvedorComponent } from './contiene-cprovedor.component';

describe('ContieneCProvedorComponent', () => {
  let component: ContieneCProvedorComponent;
  let fixture: ComponentFixture<ContieneCProvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContieneCProvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContieneCProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
