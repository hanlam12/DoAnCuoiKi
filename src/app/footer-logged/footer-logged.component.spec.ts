import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoggedComponent } from './footer-logged.component';

describe('FooterLoggedComponent', () => {
  let component: FooterLoggedComponent;
  let fixture: ComponentFixture<FooterLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLoggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
