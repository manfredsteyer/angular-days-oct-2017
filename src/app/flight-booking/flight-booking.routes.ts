import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AuthGuard} from '../navbar/auth.guard';
import {PassengerSearchComponent} from '../passenger-search/passenger-search.component';
import {ExitGuard} from '../shared/exit/exit.guard';

import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightEditResolver} from './flight-edit/flight-edit.resolver';
import {FlightSearchComponent} from './flight-search/flight-search.components';


export const FLIGHT_SEARCH_ROUTES: Routes = [
    {
        path: '',
        component: FlightBookingComponent,
        // canActivate: [AuthGuard],
        children: [
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
                canDeactivate: [ExitGuard],
                resolve: {
                    flight: FlightEditResolver
                }
            }
       
        ]
    },
];