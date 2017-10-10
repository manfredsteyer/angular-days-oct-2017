import { FlightEditResolver } from './flight-edit/flight-edit.resolver';
import { ExitGuard } from '../shared/exit/exit.guard';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';
import { FlightService } from './flight-search/flight.service';
import { FlightBookingComponent } from './flight-booking.component';
import { PassengerSearchComponent } from '../passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.components';
import { FLIGHT_SEARCH_ROUTES } from './flight-booking.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(FLIGHT_SEARCH_ROUTES),
        SharedModule
    ],
    declarations: [
        PassengerSearchComponent,
        FlightSearchComponent,
        FlightEditComponent,
        FlightBookingComponent,
    FlightCardComponent
],
    providers: [
        FlightEditResolver,
        ExitGuard,
        FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }