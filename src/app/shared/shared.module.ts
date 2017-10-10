import { FormsModule } from '@angular/forms';
import { DateControlComponent } from './date/date-control.component';
import { DateValueAccessor } from './date/date.directive';
import { CustomPreloadingStrategy } from './preloading/custom-preloading-strategy';
import { AuthService } from './auth/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./pipes/location.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LocationPipe,
        DateValueAccessor,
        DateControlComponent
    ],
    providers: [ 
        AuthService, 
        CustomPreloadingStrategy
    ],
    exports: [
        LocationPipe,
        DateValueAccessor,
        DateControlComponent
    ]
})
export class SharedModule { 
}