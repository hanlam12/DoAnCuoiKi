import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieukhoandichvuComponent } from './dieukhoandichvu.component';

describe('DieukhoandichvuComponent', () => {
  let component: DieukhoandichvuComponent;
  let fixture: ComponentFixture<DieukhoandichvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieukhoandichvuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieukhoandichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
