import { Flight } from '../../entities/flight';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validator} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Directive({
  selector: 'input[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityValidatorDirective,
    multi: true
  }]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  @Input() city: string;
  
  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<object> {

    let value = control.value;

    return this
            .flightService
            .find(value, '')
            .map((flights: Flight[]) => flights.length > 0)
            .map(ok => ok ? {} : { asyncCity: true});
  }

}