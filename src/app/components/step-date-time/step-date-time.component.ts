import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { WizardService } from 'src/app/common/services/wizard.service';

@Component({
  selector: 'app-step-date-time',
  templateUrl: './step-date-time.component.html',
  styleUrls: ['./step-date-time.component.css']
})
export class StepDateTimeComponent implements OnInit {

  public dateTime: FormGroup;
  public clickButton: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _wizardService: WizardService,
  ) { 
  }

  ngOnInit() {
    this.dateTime = new FormGroup({
      'date': new FormControl(this._wizardService.wizard.steps[2].data.date, Validators.required),
      'time': new FormControl(this._wizardService.wizard.steps[2].data.time, Validators.required),
    });
  }

  public onBackButtonClick() {
    this._router.navigate(['../step-2'], {relativeTo: this._route});
  }

  public onNextButtonClick() {
    if (!this.clickButton) {
      this.clickButton = true;
    }
    if (this.dateTime.invalid) {
      return;
    }
    this._wizardService.updatedateTime(this.dateTime);
    this._router.navigate(['../step-4'], {relativeTo: this._route});
  }

}
