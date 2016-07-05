import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeConvert'
})
export class TimeConvertPipe implements PipeTransform {
  transform(value: any, lang: string = 'en') {
    let d = new Date(value * 1000);
    let h = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
    let m = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
    return h + ':' + m;
  }
}
