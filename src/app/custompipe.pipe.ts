import {Pipe,PipeTransform} from '@angular/core'


@Pipe({name: 'customPipes'})
export class customPipes implements PipeTransform {
  transform(value1: number, value2: number): number {
    return value1 +value2;//Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}