import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDateTimeComponent } from './step-date-time.component';

describe('StepDateTimeComponent', () => {
  let component: StepDateTimeComponent;
  let fixture: ComponentFixture<StepDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
