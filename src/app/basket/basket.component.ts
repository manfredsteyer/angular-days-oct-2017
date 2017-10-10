import { FlightEventService } from '../flight.event.service';
import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  flights: Flight[] = [];
  constructor(private flightEventService: FlightEventService) {
    
    flightEventService.flightSelected.subscribe(f => {
      this.flights.push(f);
    })
  }


}
