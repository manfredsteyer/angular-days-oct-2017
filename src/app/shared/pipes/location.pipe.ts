import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'location',
    pure: true
})
export class LocationPipe implements PipeTransform {
    transform(value: any, fmt: string, lang: string): any {
        
        let long, short;

        switch(value) {
            case "Hamburg":
                long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
                short = 'HAM';
            break;
            case "Graz":
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
            break;
            case "Nürnberg":
                long = 'Airport Nürnberg - Albrecht Dürrer';
                short = 'NUE';
            break;
            default:
                long = short = 'ROM';
        }

        if (fmt == 'short') return short;
        return long;

    }
}