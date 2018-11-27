import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { WizardService } from 'src/app/common/services/wizard.service';

@Component({
  selector: 'app-step-date-time',
  templateUrl: './step-date-time.component.html',
  styleUrls: ['./step-date-time.component.css']
})
export class StepDateTimeComponent implements OnInit {

  public dateTime: FormGroup;
  public clickNextButton: boolean = false;
  public clickTimerButton: boolean = false;
  public timerId: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _wizardService: WizardService,
  ) { 
  }

  ngOnInit() {
    this.dateTime = new FormGroup({
      'datetime': new FormControl(this._wizardService.wizard.steps[2].data.datetime, Validators.required),
    });
  }

  public onBackButtonClick() {
    this._router.navigate(['../step-2'], {relativeTo: this._route});
    clearInterval(this.timerId);
  }

  public onNextButtonClick() {
    if (!this.clickNextButton) {
      this.clickNextButton = true;
    }
    if (this.dateTime.invalid) {
      return;
    }
    this._router.navigate(['../step-4'], {relativeTo: this._route});
    clearInterval(this.timerId);
  }

  public calculateTimerSeconds() {
    const endDate: Date = new Date(this.dateTime.value.datetime);
    const currentDate: Date = new Date();
    return (+endDate - +currentDate) / 1000;
  }

  public startTimer(seconds) {
    if (seconds > 0) {
      let minutes = seconds/60; 
      let hours = minutes/60;
      let days = hours / 24;

      minutes = (hours - Math.floor(hours)) * 60; 
      days = Math.floor(days);
      hours =  Math.floor(hours)- days * 24; 
      seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
      minutes = Math.floor(minutes); 
   
      this.setTimePage(days, hours, minutes, seconds);

      const secOut = () => {
        if (seconds == 0) { 
          if (minutes == 0) { 
            if (hours == 0) { 
                 if(days !== 0){
                  days--; 
                  hours = 24; 
                  minutes = 59; 
                  seconds = 59; 
                }
            }
            else {
              hours--; 
              minutes = 59; 
              seconds = 59; 
            }
          }
          else {
            minutes--; 
            seconds = 59; 
          }
        }
        else {
          seconds--; 
        }
        this.setTimePage(days, hours, minutes, seconds);
      }
      
      this.timerId = setInterval(secOut, 1000);
    }
  }

  public isLessThanMinute() {
    this.calculateTimerSeconds() < 60 ? true : false;
  }

  public onTimerButtonClick() {
    this.clickTimerButton = true;
    clearInterval(this.timerId);

    let seconds: number = this.calculateTimerSeconds();
    if ( seconds > 60 ) {
      this.startTimer(seconds);
      this._wizardService.updatedateTime(this.dateTime);
      this.clickTimerButton = false;
    }
  }

  public setTimePage(days, hours, minutes, seconds): void { 
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours"); 
    const minutesInput = document.getElementById("minutes"); 
    const secondsInput = document.getElementById("seconds"); 
   
    daysInput.innerHTML = days;
    hoursInput.innerHTML = hours;
    minutesInput.innerHTML = minutes;
    secondsInput.innerHTML = seconds;
  }
}
