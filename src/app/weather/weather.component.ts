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

@Component({
  selector: 'weather',
  providers: [HTTP_PROVIDERS, Settings,WeatherService],
  pipes: [DateConvertPipe, TempConvertPipe],
  directives: [NgFor, WeatherInputComponent,MdSlideToggle],
  template: require('./weather.template.html')
})

export class WeatherComponent {

  isFarenheit: boolean = Settings.getInstance().isFarenheit();
  singleton: Settings;
  weather: any[] = null;
  currentCity: ICity = new City('ozoir');

  cityChanged(city) {
    this.weatherService.getWeather(city);
  }

  updateTemp(): void {
    //this.singleton.setIsTimeToRefesh(!this.singleton.isTimeToRefesh())
    this.isFarenheit = !this.isFarenheit;
  }

  constructor(private weatherService: WeatherService) {
    //this.singleton = Settings.getInstance();
    this.weatherService.getWeather(this.currentCity);
  }
}
