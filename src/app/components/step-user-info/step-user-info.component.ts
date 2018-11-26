import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WizardService } from 'src/app/common/services/wizard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-user-info',
  templateUrl: './step-user-info.component.html',
  styleUrls: ['./step-user-info.component.css']
})
export class StepUserInfoComponent implements OnInit {

  // ui data
  public countries$: Observable<any[]>;

  public userForm: FormGroup;

  public clickButton: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _wizardService: WizardService,
  ) { 
    this.countries$ = this._wizardService.getCountries();
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl(this._wizardService.wizard.steps[1].data.mail, Validators.required),
      'country': new FormControl(this._wizardService.wizard.steps[1].data.country, Validators.required),
      'password': new FormControl(this._wizardService.wizard.steps[1].data.password, Validators.required),
    });
  }

  public onBackButtonClick() {
    this._router.navigate(['../step-1'], {relativeTo: this._route});
  }

  public onNextButtonClick() {
    if (!this.clickButton) {
      this.clickButton = true;
    }
    if (this.userForm.invalid) {
      return;
    }
    this._wizardService.updateUserInfo(this.userForm.value);
    this._router.navigate(['../step-3'], {relativeTo: this._route});
  }

}
