import {HTTP_PROVIDERS} from '@angular/http';
import {Component, OnInit} from '@angular/core';
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
  providers: [HTTP_PROVIDERS, Settings, WeatherService],
  pipes: [DateConvertPipe, TempConvertPipe],
  directives: [NgFor, WeatherInputComponent, MdSlideToggle],
  template: require('./weather.template.html')
})

export class WeatherComponent implements OnInit {

  isFarenheit: boolean = Settings.getInstance().isFarenheit();
  singleton: Settings;
  weather: any[] = null;
  currentCity: ICity = new City('ozoir');

  ngOnInit() {
    console.log('Hello weather');
  }

  cityChanged(city) {
    this.weatherService.getWeather(city);
  }

  updateTemp(): void {
    //this.singleton.setIsTimeToRefesh(!this.singleton.isTimeToRefesh())
    this.isFarenheit = !this.isFarenheit;
  }
  searchForWeather(city: ICity = this.currentCity) {
    this.weatherService.getWeather(this.currentCity);
  }

  constructor(private weatherService: WeatherService) {
    //this.singleton = Settings.getInstance();
    this.searchForWeather(this.currentCity);
  }
}
