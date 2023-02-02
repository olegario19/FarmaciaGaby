import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApriincipalComponent } from './apriincipal.component';

describe('ApriincipalComponent', () => {
  let component: ApriincipalComponent;
  let fixture: ComponentFixture<ApriincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApriincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApriincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
