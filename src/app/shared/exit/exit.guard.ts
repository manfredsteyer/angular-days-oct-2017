import { FlightEditComponent } from '../../flight-booking/flight-edit/flight-edit.component';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanExitComponent {
    CanExit(): Observable<boolean>;
}

@Injectable()
export class ExitGuard implements CanDeactivate<CanExitComponent> {
    canDeactivate(
        component: CanExitComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot ): Observable<boolean> {
        
            return component.CanExit();

    }
}