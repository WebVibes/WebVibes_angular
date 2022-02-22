import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWebshopComponent } from './services-webshop.component';

describe('ServicesWebshopComponent', () => {
  let component: ServicesWebshopComponent;
  let fixture: ComponentFixture<ServicesWebshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWebshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWebshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
