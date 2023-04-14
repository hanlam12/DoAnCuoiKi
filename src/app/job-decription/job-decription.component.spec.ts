import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDecriptionComponent } from './job-decription.component';

describe('JobDecriptionComponent', () => {
  let component: JobDecriptionComponent;
  let fixture: ComponentFixture<JobDecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDecriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
