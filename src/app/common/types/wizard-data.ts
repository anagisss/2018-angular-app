import { IWizardDateTime } from "./wizard-step-date-time";
import { IWizardStepPhone } from "./wizard-step-phone";
import { IWizardStepUserInfo } from "./wizard-step-user-info";
import { IWizardStepResult } from "./wizard-step-result";

export interface IWizardData {
  id: number;
  steps: [IWizardStepPhone, IWizardStepUserInfo, IWizardDateTime, IWizardStepResult];
}
