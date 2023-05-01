import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEmployerComponent } from './homepage-employer.component';

describe('HomepageEmployerComponent', () => {
  let component: HomepageEmployerComponent;
  let fixture: ComponentFixture<HomepageEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
