import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaydoimatkhauComponent } from './thaydoimatkhau.component';

describe('ThaydoimatkhauComponent', () => {
  let component: ThaydoimatkhauComponent;
  let fixture: ComponentFixture<ThaydoimatkhauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaydoimatkhauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaydoimatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
