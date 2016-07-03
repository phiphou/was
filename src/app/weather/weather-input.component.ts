import {Component, Output, EventEmitter} from '@angular/core';
import {City} from './City';
import {ICity} from './ICity';
import {MdInput} from '@angular2-material/input';
import {WeatherService} from './weather.service';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'weather-input',
  directives: [MdInput],
  pipes : [TranslatePipe],
  template: `<form (ngSubmit)="submit(city)" autocomplete="off">
  <md-input placeholder="{{'WEATHER_PROMPT' | translate}}"
      [value]="weatherService.city != null ? weatherService.city.name: ''"
      (input)="city.name = $event.target.value" autofocus>
    </md-input>
  </form>`
})

export class WeatherInputComponent {

  @Output()
  cityChangedEvent: EventEmitter<City>;

  city: ICity = this.weatherService.city;

  constructor(private weatherService: WeatherService) {
    this.cityChangedEvent = new EventEmitter<City>();
  }

  submit(city): void {
    this.cityChangedEvent.emit(city);
    //this.city = new City();
  }
}
