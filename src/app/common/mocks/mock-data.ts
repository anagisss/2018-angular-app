import { IWizardStepPhone } from "../types/wizard-step-phone";
import { IWizardStepUserInfo } from "../types/wizard-step-user-info";
import { IWizardDateTime } from "../types/wizard-step-date-time";
import { IWizardStepResult } from "../types/wizard-step-result";

export const step1: IWizardStepPhone = {
  number: 1,
  name: 'step-1',
  data: {
    phone: '',
  }
}

export const step2: IWizardStepUserInfo = {
  number: 2,
  name: 'step-2',
  data: {
    mail: '',
    password: '',
    country: {
      name: '',
      code: '',
    }
  }
}

export const step3: IWizardDateTime = {
  number: 3,
  name: 'step-3',
  data: {
    date: '',
    time: '',
  }
}

export const step4: IWizardStepResult = {
  number: 4,
  name: 'step-4',
  data: {
    phone: '',
    mail: '',
    password: '',
    country: {
      name: '',
      code: '',
    },
    date: '',
    time: '',
  }
}
