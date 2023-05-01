import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWZComponent } from './admin-wz.component';

describe('AdminWZComponent', () => {
  let component: AdminWZComponent;
  let fixture: ComponentFixture<AdminWZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
