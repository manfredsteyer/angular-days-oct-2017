import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Flight} from '../../entities/flight';
import {FlightService} from '../flight-search/flight.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  
  id: string;
  showDetails: string;
  flight: Flight;
  
  date: string = new Date().toISOString();
  
  warningDialog = {
    show: false,
    sender: null
  }

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) { }



  ngOnInit() {
    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.loadFlight();
      }
    );
  }

  loadFlight() {
    this.flightService.findById(this.id).subscribe(
      flight => this.flight = flight,
      err => console.error('Error Loading Flight', err)
    );
  }

}
