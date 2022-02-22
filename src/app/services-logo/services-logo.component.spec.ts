import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLogoComponent } from './services-logo.component';

describe('ServicesLogoComponent', () => {
  let component: ServicesLogoComponent;
  let fixture: ComponentFixture<ServicesLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
