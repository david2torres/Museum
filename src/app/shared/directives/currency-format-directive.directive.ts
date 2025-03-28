import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true,
})
export class CurrencyFormatDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private control: NgControl,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const initialValue = this.control?.control?.value;
    if (initialValue !== null && initialValue !== undefined) {
      const formattedValue = this.formatCurrency(initialValue.toString());
      this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');
    const formattedValue = this.formatCurrency(numericValue);

    this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);

    if (this.control && this.control.control) {
      this.control.control.setValue(Number(numericValue));
    }
  }

  @HostListener('blur')
  onBlur() {
    const currentValue = this.control.control?.value;
    if (currentValue) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'value',
        this.formatCurrency(currentValue.toString()),
      );
    }
  }

  private formatCurrency(value: string): string {
    if (!value) return '';
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(Number(value));
  }
}
