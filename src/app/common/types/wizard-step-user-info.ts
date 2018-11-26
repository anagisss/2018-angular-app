import { IWizardStep } from "./wizard-step";

export interface IWizardStepUserInfo extends IWizardStep {
  data: {
    mail: string;
    password: string;
    country: {
      name: string;
      code: string;
    }
  }
}
