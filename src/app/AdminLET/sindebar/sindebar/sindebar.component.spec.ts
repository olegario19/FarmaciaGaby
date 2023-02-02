import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindebarComponent } from './sindebar.component';

describe('SindebarComponent', () => {
  let component: SindebarComponent;
  let fixture: ComponentFixture<SindebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
