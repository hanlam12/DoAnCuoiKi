import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonUngTuyenComponent } from './don-ung-tuyen.component';

describe('DonUngTuyenComponent', () => {
  let component: DonUngTuyenComponent;
  let fixture: ComponentFixture<DonUngTuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonUngTuyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonUngTuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
