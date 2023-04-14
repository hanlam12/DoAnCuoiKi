import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quenmatkhau3Component } from './quenmatkhau3.component';

describe('Quenmatkhau3Component', () => {
  let component: Quenmatkhau3Component;
  let fixture: ComponentFixture<Quenmatkhau3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quenmatkhau3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quenmatkhau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
