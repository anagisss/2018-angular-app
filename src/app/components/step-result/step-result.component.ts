import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WizardService } from 'src/app/common/services/wizard.service';
import { IWizardStepResult } from 'src/app/common/types/wizard-step-result';

@Component({
  selector: 'app-step-result',
  templateUrl: './step-result.component.html',
  styleUrls: ['./step-result.component.css']
})
export class StepResultComponent implements OnInit {

  public wizardResult: IWizardStepResult;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _wizardService: WizardService,
  ) { 
    
  }

  ngOnInit() {
    this._wizardService.generateWizardResult();
    this.wizardResult = this._wizardService.wizard.steps[3];
  }

  public onBackButtonClick() {
    this._router.navigate(['../step-3'], {relativeTo: this._route});
  }

}
