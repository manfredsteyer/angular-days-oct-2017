import { CityValidator } from '../../shared/validation/city-validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanExitComponent } from '../../shared/exit/exit.guard';
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
export class FlightEditComponent implements OnInit, CanExitComponent {
  
  id: string;
  showDetails: string;
  flight: Flight;

  form: FormGroup;

  dynamicMetaData = [
    { label: 'Id', name: 'id' },
    { label: 'Date', name: 'date' },
    { label: 'Airport of Departure', name: 'from' },
    { label: 'Airport of Destination', name: 'to' },
  ];
  
  date: string = new Date().toISOString();
  
  warningDialog = {
    show: false,
    sender: null
  }

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private fb: FormBuilder
  ) { 

    this.form = this.fb.group({
      'id': [''],
      'from': [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          CityValidator.validate(['Graz', 'Hamburg', 'Berlin', 'Wien', 'Zürich', 'Kognito'])
        ],
        [
          CityValidator.validateAsync(flightService)
        ]
      ],
      'to': [''],
      'date': ['']
    });

    this.form.validator = Validators.compose([CityValidator.validateRouteTrip]);


    this.form.valueChanges.subscribe(changes => {
      console.debug('changes', changes);
    })

  }

  public CanExit(): Observable<boolean> {
    
    return Observable.create( (sender: Observer<boolean>) => {
      this.warningDialog.sender = sender;
      this.warningDialog.show = true;
    });

  }

  public decide(decision: boolean) {
    this.warningDialog.show = false;
    this.warningDialog.sender.next(decision);
    this.warningDialog.sender.complete();
  }

  ngOnInit() {
    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        // this.loadFlight();
      }
    );

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
      this.form.patchValue(this.flight);


      // this.form.controls['from'].patchValue(this.flight.from);

    });
  }

  /*
  loadFlight() {
    this.flightService.findById(this.id).subscribe(
      flight => this.flight = flight,
      err => console.error('Error Loading Flight', err)
    );
  }
  */


  save() {
    let changedFlight: Flight = this.form.value;
    console.debug('changedFlight', changedFlight);
  }

}
