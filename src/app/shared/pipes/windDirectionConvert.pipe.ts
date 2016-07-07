import {Pipe, PipeTransform, BaseException} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Pipe({
  name: 'windConvert'
})
export class WindDirectionConvertPipe implements PipeTransform {

  constructor(public translate: TranslateService) {
}

  transform(value: number, west?: string): string {
    if (!isNaN(value) && value !== null && value !== undefined)
      return this.degToCompass(value, west);
    throw new BaseException('Requiues a number as input');
  }

  private degToCompass(num: number, west: string = 'W'): string {
    let val = Math.floor((num / 22.5) + 0.5);
    let arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SS' + west, 'S' + west, west + 'S' + west,
      west, west + 'N' + west, 'N' + west, 'NN' + west];
    return '' + arr[(val % 16)];
  }
}
