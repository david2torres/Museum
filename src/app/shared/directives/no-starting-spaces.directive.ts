import { Directive, ElementRef, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector:
    'input:not([type=checkbox]):not([type=radio]):not([type=submit]):not([type=button]), textarea',
  standalone: true,
  host: { '(input)': 'onInputChange($event)' },
})
export class NoInitSpacesDirective {
  constructor(
    private el: ElementRef,
    @Optional() private control: NgControl,
  ) {}

  onInputChange(): void {
    const input = this.el.nativeElement as HTMLInputElement;
    const newValue = input.value.replace(/^\s+/, '');
    input.value = newValue;

    if (this.control && this.control.control) {
      this.control.control.setValue(newValue, {
        emitEvent: false,
        emitViewToModelChange: true,
      });
    }
  }
}
