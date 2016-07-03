import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {
  transform(value: any, lang: string = 'en') {
    let daysEn: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsEn: string[] = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let daysFr: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let monthsFr: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    let d = new Date(value * 1000);
    let j = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();
    if (lang === 'fr')
      return daysFr[d.getDay()] + ' ' + j + ' ' + monthsFr[d.getMonth()];
    else
      return daysEn[d.getDay()] + ' ' + monthsEn[d.getMonth()] + ' ' + j;
  }
}
