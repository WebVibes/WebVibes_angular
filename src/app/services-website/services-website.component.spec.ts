import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWebsiteComponent } from './services-website.component';

describe('ServicesWebsiteComponent', () => {
  let component: ServicesWebsiteComponent;
  let fixture: ComponentFixture<ServicesWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
