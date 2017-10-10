import { Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'date-control',
    templateUrl: './date-control.component.html'
})
export class DateControlComponent
    implements ControlValueAccessor {

    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;

    onChange = (_) => {};
    onTouched = () => {};

    constructor(private c: NgControl) {
        c.valueAccessor = this;
    }

    writeValue(value: any) {
        this.splitDate(value);
    }

    registerOnChange(fn): void { this.onChange = fn; }
    registerOnTouched(fn): void { this.onTouched = fn; }

    splitDate(dateString) {
        var date = new Date(dateString);

        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }

    apply() {

        if (!this.day || isNaN(this.day)) {
            this.onChange('');
            this.onTouched();
            return;
        }
        
        var date = new Date(this.year, this.month-1, this.day, this.hour, this.minute, 0, 0);

        this.onChange(date.toISOString());
        this.onTouched();
    }

}