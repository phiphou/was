import {Pipe, PipeTransform, BaseException} from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {
  transform(value, isFarenheit: boolean = false) {
    if (!isNaN(value) && value !== null && value !== undefined)
      return isFarenheit ? this.toFarenheit(value) : value;
    throw new BaseException('Requires a number as input');
  }

  toFarenheit(temp: number): number {
    return temp * 1.8 + 32;
  }
}
