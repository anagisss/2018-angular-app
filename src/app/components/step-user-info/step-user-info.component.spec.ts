import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepUserInfoComponent } from './step-user-info.component';

describe('StepUserInfoComponent', () => {
  let component: StepUserInfoComponent;
  let fixture: ComponentFixture<StepUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
