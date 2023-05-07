import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemUngVienComponent } from './xem-ung-vien.component';

describe('XemUngVienComponent', () => {
  let component: XemUngVienComponent;
  let fixture: ComponentFixture<XemUngVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemUngVienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XemUngVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
