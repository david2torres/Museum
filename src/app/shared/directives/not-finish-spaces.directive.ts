import { Directive, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector:
    'input:not([type=checkbox]):not([type=radio]):not([type=submit]):not([type=button]), textarea',
  standalone: true,
  host: {
    '(blur)': 'onBlur()',
    // '(input)': 'onInput()',
  },
})
export class NotFinishSpacesDirective {
  constructor(@Optional() private control: NgControl) {}

  onBlur() {
    const currentValue = String(this.control?.control?.value);
    if (currentValue) {
      const trimmedValue = currentValue?.trimEnd();
      this.control.control?.setValue(trimmedValue, { emitEvent: false });
    }
  }

  onInput() {
    const currentValue = this.control.control?.value;
    if (currentValue && currentValue.endsWith(' ')) {
      const trimmedValue = currentValue.trimEnd();
      this.control.control?.setValue(trimmedValue, { emitEvent: false });
    }
  }
}
