import { FlightEventService } from '../../flight.event.service';
import { Flight } from '../../entities/flight';
import { Component, OnInit, EventEmitter } from '@angular/core';

//               V----------------V--------- Explizit importiert
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from '../flight-search/flight.service'
import { Subject } from "rxjs/Rx";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService]
})
export class FlightSearchComponent {

    from: string = 'Hamburg';
    to: string = 'Graz';
    selectedFlight: Flight;

    basket: any = {
        "3": true,
        "5": true
    };

    constructor(
        private flightEventService: FlightEventService,
        private flightService: FlightService) { 
    }

    get flights() {
        return this.flightService.flights;
    }

    get flights$() {
        return this.flightService.flights$;
    }

    search(): void {

        if (!this.from || !this.to) {
            return;
        }

        this
            .flightService
            .load(this.from, this.to);

    }

    select(f: Flight): void {
        this.selectedFlight = f;
        this.flightEventService.flightSelected.next(f);
    }

    delay() {
        this.flightService.delay();
    }
}