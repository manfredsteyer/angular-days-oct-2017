import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';
import { RoundTripValidatorDirective } from './validation/roundtrip-validation.directive';
import { AuthGuard } from '../navbar/auth.guard';
import { FormsModule } from '@angular/forms';
import { DateControlComponent } from './date/date-control.component';
import { DateValueAccessor } from './date/date.directive';
import { CustomPreloadingStrategy } from './preloading/custom-preloading-strategy';
import { AuthService } from './auth/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";
import { CityValidatorDirective } from "./validation/city-validator.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LocationPipe,
        DateValueAccessor,
        DateControlComponent,
        CityValidatorDirective,
        RoundTripValidatorDirective,
        AsyncCityValidatorDirective
    ],
    providers: [],
    exports: [
        LocationPipe,
        DateValueAccessor,
        CityValidatorDirective,
        DateControlComponent,
        RoundTripValidatorDirective,
        AsyncCityValidatorDirective
    ]
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ 
                AuthGuard,
                AuthService, 
                CustomPreloadingStrategy
            ] 
        }
    }
}