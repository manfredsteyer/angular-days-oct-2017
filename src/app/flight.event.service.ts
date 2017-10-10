import { Flight } from './entities/flight';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs/Rx';

export class FlightEventService {
    flightSelected = new ReplaySubject<Flight>(30);
}