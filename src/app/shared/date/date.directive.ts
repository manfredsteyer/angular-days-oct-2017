import { Directive, ElementRef, HostBinding, HostListener, Renderer, Self } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: 'input[mydate]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: DateValueAccessor,
        multi: true
      }]
})
export class DateValueAccessor implements ControlValueAccessor {

    onChange = (_: any) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

    writeValue(value: any): void {
  
          // Write to view
          if (value) {
              var date = new Date(value);
  
              value =
                  date.getDate() + "."
                      + (date.getMonth()+1) + "."
                      + date.getFullYear();
          }
  
          var normalizedValue = (value) ? value : '';
          
          //this._elementRef.nativeElement.value = normalizedValue;

          this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
  
      }
  
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    @HostListener('blur')
    blur() {
        this.onTouched();
    }

    @HostListener('input', ['$event.target.value'])
    input(value) {

        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + "-" + value[1] + "-" + value[0];
        }

        this.onChange(value);
    }


}