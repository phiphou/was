import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {WeatherService} from './weather.service';
import {ICity} from './ICity';
import {City} from './City';
import {DateConvertPipe} from '../shared/pipes/dateConvert.pipe';
import {TempConvertPipe} from '../shared/pipes/tempConvert.pipe';
import {TimeConvertPipe} from '../shared/pipes/timeConvert.pipe';
import {WindDirectionConvertPipe} from '../shared/pipes/windDirectionConvert.pipe';
import {WindSpeedConvertPipe} from '../shared/pipes/windSpeedConvert.pipe';
import {Settings} from '../shared/settings';
import {WeatherInputComponent} from './weather-input.component';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {MdCard} from '@angular2-material/card';

@Component({
  selector: 'weather',
  providers: [HTTP_PROVIDERS, Settings, WeatherService],
  pipes: [DateConvertPipe, TempConvertPipe, TranslatePipe, TimeConvertPipe, WindDirectionConvertPipe, WindSpeedConvertPipe],
  directives: [NgFor, WeatherInputComponent, MdSlideToggle, MdCard],
  template: require('./weather.detail.template.html')
})

export class WeatherDetailComponent {

  weather: any[] = null;
  currentCity: ICity = new City('ozoir');

  cityChanged(city) {
    this.weatherService.getWeather2(city);
  }

  updateTemp(evt?: any): void {
    this.isFarenheit = evt && evt.checked !== undefined ? evt.checked : !this.isFarenheit;
  }

  searchForWeather(city: ICity = this.currentCity) {
    this.weatherService.getWeather2(this.currentCity);
  }

  get isFarenheit() {
    return Settings.getInstance().isFarenheit;
  }

  set isFarenheit(b: boolean) {
    Settings.getInstance().isFarenheit = b;
  }

  constructor(public translate: TranslateService, private weatherService: WeatherService) {
    this.searchForWeather(this.currentCity);
  }

}
