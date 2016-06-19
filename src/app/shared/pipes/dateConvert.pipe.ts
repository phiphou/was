import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {
  transform(value: any) {
    let days: String[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let months: String[] = ['Janvier', 'Févirer', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    let d = new Date(value * 1000);
    let j = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();
    return days[d.getDay()] + ' ' + j + ' ' + months[d.getMonth()];
  }
}
