import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/delay';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {ICity} from './ICity';
import {City} from './City';
import {Weather} from './Weather';
import {API_CONFIG} from '../shared/config';

@Injectable()
export class WeatherService {
  public weather: Object[] = null;
  public city: ICity;
  public pending: boolean = false;
  public errMsg: string = '';
  public error: Boolean = false;
  private url: string = '';

  constructor(private _http: Http) {
    this.url = `${API_CONFIG.base}${API_CONFIG.endpoints.forecast}`;
  }

  getWeather(city: ICity) {
    this.city = city;
    this.pending = true;
    this.weather = null;
    this.error = false;
    let params: URLSearchParams = new URLSearchParams();
    params.set('appid', API_CONFIG.appId);
    params.set('q', city.name);
    params.set('lang', 'en');
    params.set('units', 'metric');
    this._http.get(this.url + '/daily/', {
      search: params
    })
      //.delay(2000)
      .map((res: Response) => res.json())
      .subscribe(
      (data: any) => { this.parseWeather(data); return this.weather; },
      error => console.log('Could not load weather.'),
      () => this.pending = false
      );
  }

  getWeather2(city: ICity) {
    this.city = city;
    this.pending = true;
    this.weather = null;
    this.error = false;
    let params: URLSearchParams = new URLSearchParams();
    params.set('appid', API_CONFIG.appId);
    params.set('q', city.name);
    params.set('lang', 'en');
    params.set('units', 'metric');
    this._http.get(this.url + '/city/', {
      search: params
    })
      //.delay(2000)
      .map((res: Response) => res.json())
      .subscribe(
      (data: any) => { this.parseWeather2(data); return this.weather; },
      error => console.log('Could not load weather.'),
      () => this.pending = false
      );
  }

  parseWeather(data: any) {
    if (data.cod !== undefined) {
      if (data.cod === '404' || data.city === null) {
        this.errMsg = 'City Not found';
        this.city = null;
        this.error = true;
      } else {
        this.city = new City(data.city.name, data.city.id, data.city.coord);
        this.weather = data.list.map((item: any) => {
          let weather: Weather = new Weather(item.dt, item.weather[0].id.toString(), item.weather[0].icon,
            item.temp, item.weather[0].speed, item.weather[0].deg, item.humidity, item.pressure);
          return weather;
        });

      }
    }
  }

  parseWeather2(data: any) {
    if (data.cod !== undefined) {
      if (data.cod === '404' || data.city === null) {
        this.errMsg = 'City Not found';
        this.city = null;
        this.error = true;
      } else {
        this.city = new City(data.city.name, data.city.id, data.city.coord);
        this.weather = data.list.map((item: any) => {
          let weather: Weather = new Weather(item.dt, item.weather[0].id.toString(), item.weather[0].icon,
            item.main.temp, item.wind.speed, item.wind.deg, item.main.humidity, item.main.sea_level);
          return weather;
        });
        this.weather = this.weather.splice(0, 8);
      }
    }
  }
}
