import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quenmatkhau2Component } from './quenmatkhau2.component';

describe('Quenmatkhau2Component', () => {
  let component: Quenmatkhau2Component;
  let fixture: ComponentFixture<Quenmatkhau2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quenmatkhau2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quenmatkhau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
