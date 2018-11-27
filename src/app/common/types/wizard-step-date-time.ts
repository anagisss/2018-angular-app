import { IWizardStep } from "./wizard-step";

export interface IWizardDateTime extends IWizardStep {
  data: {
    datetime: string;
  }
}
