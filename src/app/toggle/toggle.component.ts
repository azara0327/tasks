import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  template: `
  <button (click)="toggle()">
  {{state ? 'ON' : 'OFF'}}
  </button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {

  state = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  toggle(){
    this.state = !this.state;
    this.onChange(this.state);
  }

  writeValue(value: any): void {
    this.state = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { 
    this.onTouched = fn;
  }

}
