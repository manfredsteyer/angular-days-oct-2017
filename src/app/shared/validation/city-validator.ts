import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { Observable } from 'rxjs/Rx';
import { AbstractControl, AsyncValidatorFn, FormGroup } from '@angular/forms';


export class CityValidator {
    
    static validate(whiteList: string[]) {

        return (control: AbstractControl): object => {

            if (whiteList.indexOf(control.value) > -1) {
                return { };
            }

            return {
                city: true
            }
        }
    }

    static validateAsync(flightService: FlightService): AsyncValidatorFn  {

        return (control: AbstractControl): Observable<object> => {

            return flightService.find(control.value, '')
                                .map(flights => flights.length > 0)
                                .map(ok => ok ? {} : {asyncCity: true});

        }
    }

    static validateRouteTrip(c: AbstractControl): object {
        let formGroup = c as FormGroup;

        if (formGroup.controls['from'].value === formGroup.controls['to'].value) {
            return {roundTrip: true};
        }
        return { };
    }
}
