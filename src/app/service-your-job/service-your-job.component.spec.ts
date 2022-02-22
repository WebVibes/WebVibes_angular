import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceYourJobComponent } from './service-your-job.component';

describe('ServiceYourJobComponent', () => {
  let component: ServiceYourJobComponent;
  let fixture: ComponentFixture<ServiceYourJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceYourJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceYourJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
