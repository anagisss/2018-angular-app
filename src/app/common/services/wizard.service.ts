import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWizardData } from '../types/wizard-data';
import { step1, step2, step3, step4 } from '../mocks/mock-data';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private _wizard: IWizardData = {
    id: null,
    steps: [step1, step2, step3, step4],
  }

  constructor(
    private _http: HttpClient
  ) { }

  get wizard(): IWizardData {
    return this._wizard;
  }

  public getCountries(): Observable<any[]> {
    return this._http.get<Array<any>>('./mock-data/countries.json');
  }

  public updatePhoneNumber(phoneNumber: string) {
    this._wizard.steps[0].data.phone = phoneNumber;
  }

  public updateUserInfo(userInfo: {[key: string]: string}) {
    this._wizard.steps[1].data.mail = userInfo.email;
    this._wizard.steps[1].data.password = userInfo.password;
    this._wizard.steps[1].data.country.name = userInfo.country;
  }

  public updatedateTime(dateTime) {
    this._wizard.steps[2].data.date = dateTime.value.date;
    this._wizard.steps[2].data.time = dateTime.value.time;
  }

  public generateWizardResult() {
    this._wizard.steps[3].data.phone = this._wizard.steps[0].data.phone;
    this._wizard.steps[3].data.mail = this._wizard.steps[1].data.mail;
    this._wizard.steps[3].data.password = this._wizard.steps[1].data.password;
    this._wizard.steps[3].data.country.name = this._wizard.steps[1].data.country.name;
    this._wizard.steps[3].data.date = this._wizard.steps[2].data.date;
    this._wizard.steps[3].data.time = this._wizard.steps[2].data.time;
  }
  
}
