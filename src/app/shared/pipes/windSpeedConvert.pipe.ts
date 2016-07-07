import {Pipe, PipeTransform, BaseException} from '@angular/core';

@Pipe({
  name: 'windSpeedConvert'
})
export class WindSpeedConvertPipe implements PipeTransform {
  transform(value, isFarenheit: boolean = false) {
    if (!isNaN(value) && value !== null && value !== undefined)
      return !isFarenheit ? this.toKmph(value) : value;
    throw new BaseException('Requires a number as input');
  }

  toKmph(speed: number): number {
    return speed * 1.609344;
  }
}
