import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoraESComponent } from './chora-es.component';

describe('ChoraESComponent', () => {
  let component: ChoraESComponent;
  let fixture: ComponentFixture<ChoraESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoraESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoraESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
