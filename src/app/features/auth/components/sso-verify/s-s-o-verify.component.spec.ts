import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSOVerifyComponent } from './s-s-o-verify.component';

describe('SsoVerifyComponent', () => {
  let component: SSOVerifyComponent;
  let fixture: ComponentFixture<SSOVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSOVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSOVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
