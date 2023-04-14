import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongBaoViecLamComponent } from './thong-bao-viec-lam.component';

describe('ThongBaoViecLamComponent', () => {
  let component: ThongBaoViecLamComponent;
  let fixture: ComponentFixture<ThongBaoViecLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongBaoViecLamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongBaoViecLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
