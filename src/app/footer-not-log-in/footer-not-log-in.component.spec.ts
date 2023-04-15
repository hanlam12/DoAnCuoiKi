import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNotLogInComponent } from './footer-not-log-in.component';

describe('FooterNotLogInComponent', () => {
  let component: FooterNotLogInComponent;
  let fixture: ComponentFixture<FooterNotLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNotLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNotLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
