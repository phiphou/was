import {Component, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {City} from './City';
import {ICity} from './ICity';

@Component({
  selector: 'weather-input',
  directives: [FORM_DIRECTIVES],
  template: `<form (ngSubmit)="submit(city)">
  <input type="text" class="form-control form-control-lg"
  placeholder="enter a city and press enter" [(ngModel)]="city.name">
  </form>`
})

export class WeatherInputComponent {

  @Output()
  cityChangedEvent: EventEmitter<City>;

  city: ICity = new City();

  constructor() {
    this.cityChangedEvent = new EventEmitter<City>();
  }

  submit(city): void {
    this.cityChangedEvent.emit(city);
    this.city = new City();
  }
}
