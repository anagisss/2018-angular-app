import { IWizardStep } from "./wizard-step";

export interface IWizardStepResult extends IWizardStep {
  data: {
    phone: string;
    mail: string;
    password: string;
    country: {
      name: string;
      code: string;
    }
    date: string;
    time: string;
  }
}
