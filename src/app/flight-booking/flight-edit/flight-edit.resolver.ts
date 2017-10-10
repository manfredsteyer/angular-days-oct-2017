import { FlightService } from '../flight-search/flight.service';
import { Observable } from 'rxjs/Rx';
import { Flight } from '../../entities/flight';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class FlightEditResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>  {
        let id = route.params['id'];
        return this.flightService.findById(id); //.delay(4000);
    }
}