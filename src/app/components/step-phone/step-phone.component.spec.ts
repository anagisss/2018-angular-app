import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPhoneComponent } from './step-phone.component';

describe('StepPhoneComponent', () => {
  let component: StepPhoneComponent;
  let fixture: ComponentFixture<StepPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
