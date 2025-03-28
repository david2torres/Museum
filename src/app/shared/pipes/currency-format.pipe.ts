import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCOP',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(value);
  }
}
