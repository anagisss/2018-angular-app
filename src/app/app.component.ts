import { Component } from '@angular/core';
import { WizardService } from './common/services/wizard.service';
import { IWizardData } from './common/types/wizard-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ui
  public wizard: IWizardData;
  public currentStep: string = '';

  public constructor(
    private _wizardService: WizardService,
    private _router: Router,
  ) {
  }

  public ngOnInit(): void {
    this._router.events.subscribe(() => {
      this.currentStep = this._router.url.replace('/','');

    });

    this.wizard = this._wizardService.wizard;
  }

  public isCompletedStep(stepName: string): boolean {
    const currentStepNumber: number = +this.currentStep[this.currentStep.length - 1];
    const stepNumber: number = +stepName[stepName.length - 1];
    return currentStepNumber > stepNumber;
  }

}
