import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(price: number, currency: string = '$'): string {
    return `${price} ${currency}`;
  }
}
