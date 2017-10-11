import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripValidatorDirective,
      multi: true
    }
  ]
})
export class RoundTripValidatorDirective implements Validator {

  
  constructor() { }

  validate(control: AbstractControl): object {
    let form = control as FormGroup;

    if (!form.controls['from'] || !form.controls['to'] ) {
        return { };
    }

    if (form.controls['from'].value === form.controls['to'].value) {
        return { roundTrip: { 'from': 'x', 'to': 'y'} }
    }

    return { };
  }

}