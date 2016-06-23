import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {TestComponentBuilder } from '@angular/compiler/testing';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import {HTTP_PROVIDERS} from '@angular/http';


describe('Testing Quote Component', () => {
  beforeEachProviders(() => [
    WeatherComponent, WeatherService, HTTP_PROVIDERS
  ]);

  it('should update text', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(WeatherComponent)
      .then((fixture) => {
        fixture.detectChanges();
        expect(fixture).not.toBeUndefined();
      });
  }));

  let initSpy;
  beforeEach(() => {
    initSpy = jasmine.createSpy('searchForWeather');
  });

  it('does something', inject([WeatherComponent], (something) => {
    expect(something).not.toBeUndefined();
    initSpy(something.currentCity);
    expect(initSpy).toHaveBeenCalledWith(something.currentCity);
  }));

  it('should log ngOnInit', inject([WeatherComponent], (weatherComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    weatherComponent.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello weather');
  }));

  it('should toggle isFarenheit', inject([WeatherComponent], (weatherComponent) => {
    let initial: boolean = weatherComponent.isFarenheit;
    weatherComponent.updateTemp();
    expect(weatherComponent.isFarenheit).toEqual(!initial);
  }));

  it('should call for weather', inject([WeatherComponent], (weatherComponent) => {
    weatherComponent.searchForWeather();
    expect(weatherComponent.weatherService.pending).toEqual(true);
  }));

});
