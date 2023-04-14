import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quenmatkhau1Component } from './quenmatkhau1.component';

describe('Quenmatkhau1Component', () => {
  let component: Quenmatkhau1Component;
  let fixture: ComponentFixture<Quenmatkhau1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quenmatkhau1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quenmatkhau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
