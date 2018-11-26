import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { WizardService } from 'src/app/common/services/wizard.service';

@Component({
  selector: 'app-step-phone',
  templateUrl: './step-phone.component.html',
  styleUrls: ['./step-phone.component.css']
})
export class StepPhoneComponent implements OnInit {

  public phoneNumber: FormControl;
  public clickButton: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _wizardService: WizardService,
  ) { 
  }

  ngOnInit() {
    this.phoneNumber = new FormControl(this._wizardService.wizard.steps[0].data.phone, Validators.required);
    
  }

  public onNextButtonClick() {
    if (!this.clickButton) {
      this.clickButton = true;
    }
    if (this.phoneNumber.invalid) {
      return;
    }
    this._wizardService.updatePhoneNumber(this.phoneNumber.value);
    this._router.navigate(['../step-2'], {relativeTo: this._route});
  }
}
