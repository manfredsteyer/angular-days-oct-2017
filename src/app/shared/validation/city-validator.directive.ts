import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  @Input() city: string;
  
  constructor() { }

  validate(control: AbstractControl): object {

    let value = control.value;
    let whiteList = this.city.split(',');

    if (whiteList.indexOf(value) != -1) {
      return { }
    }
    return {
      city: {
        actual: value,
        allowed: whiteList,
        reason: 42,
        tryAgain: 2018
      }
    }
  }

}