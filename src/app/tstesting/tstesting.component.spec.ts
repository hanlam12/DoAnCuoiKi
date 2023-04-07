import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TStestingComponent } from './tstesting.component';

describe('TStestingComponent', () => {
  let component: TStestingComponent;
  let fixture: ComponentFixture<TStestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TStestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TStestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
