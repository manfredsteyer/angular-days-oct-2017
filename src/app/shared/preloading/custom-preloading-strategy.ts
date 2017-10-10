import { Observable } from 'rxjs/Rx';
import { PreloadingStrategy, Route } from '@angular/router';


import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {


    public preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return Observable.of(true).delay(8000).switchMap(_ => fn());
    }
}