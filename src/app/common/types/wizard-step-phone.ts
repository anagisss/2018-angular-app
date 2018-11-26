import { IWizardStep } from "./wizard-step";

export interface IWizardStepPhone extends IWizardStep {
  data: {
    phone: string;
  }
}
