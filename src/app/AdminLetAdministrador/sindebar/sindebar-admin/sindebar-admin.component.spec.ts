import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindebarAdminComponent } from './sindebar-admin.component';

describe('SindebarAdminComponent', () => {
  let component: SindebarAdminComponent;
  let fixture: ComponentFixture<SindebarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindebarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindebarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
