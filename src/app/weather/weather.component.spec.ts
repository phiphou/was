import { beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {WeatherComponent} from './weather.component';
import {WeatherService} from './weather.service';
import {HTTP_PROVIDERS} from '@angular/http';

describe('Testing WeatherComponent', () => {
  let initSpy;
  beforeEach(() => {
    initSpy = jasmine.createSpy('searchForWeather');
  });

  beforeEachProviders(() => [
    WeatherComponent, WeatherService, HTTP_PROVIDERS
  ]);

  it('should build', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(WeatherComponent)
      .then((fixture) => {
        fixture.detectChanges();
        console.log(fixture);
        expect(fixture).not.toBeUndefined();
      });
  }));

  it('test instanciation', inject([WeatherComponent], (weatherComponent) => {
    expect(initSpy).not.toHaveBeenCalled();
    initSpy(weatherComponent.currentCity);
    expect(initSpy).toHaveBeenCalledWith(weatherComponent.currentCity);
    expect(weatherComponent.weatherService.pending).toEqual(true);
  }));

  it('should toggle isFarenheit', inject([WeatherComponent], (weatherComponent) => {
    let initial: boolean = weatherComponent.isFarenheit;
    weatherComponent.updateTemp();
    expect(weatherComponent.isFarenheit).toEqual(!initial);
    weatherComponent.updateTemp();
    expect(weatherComponent.isFarenheit).toEqual(initial);
  }));

});