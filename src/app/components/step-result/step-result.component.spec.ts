import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepResultComponent } from './step-result.component';

describe('StepResultComponent', () => {
  let component: StepResultComponent;
  let fixture: ComponentFixture<StepResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
