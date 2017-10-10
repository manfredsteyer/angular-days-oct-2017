import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.components';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";


export const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
    }
];