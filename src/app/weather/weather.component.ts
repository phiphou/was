import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {WeatherService} from './weather.service';
import {ICity} from './ICity';
import {City} from './City';
import {DateConvertPipe} from '../shared/pipes/dateConvert.pipe';
import {TempConvertPipe} from '../shared/pipes/tempConvert.pipe';
import {Settings} from '../shared/settings';
import {WeatherInputComponent} from './weather-input.component';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'weather',
  providers: [HTTP_PROVIDERS, Settings, WeatherService],
  pipes: [DateConvertPipe, TempConvertPipe, TranslatePipe],
  directives: [NgFor, WeatherInputComponent, MdSlideToggle],
  template: require('./weather.template.html')
})

export class WeatherComponent {

  weather: any[] = null;
  currentCity: ICity = new City('ozoir');

  cityChanged(city) {
    this.weatherService.getWeather(city);
  }

  updateTemp(): void {
    this.isFarenheit = !this.isFarenheit;
  }
  searchForWeather(city: ICity = this.currentCity) {
    this.weatherService.getWeather(this.currentCity);
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
