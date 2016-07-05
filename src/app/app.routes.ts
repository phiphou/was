import {Component} from '@angular/core';
import {Router, provideRouter, RouterConfig} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {WeatherDetailComponent} from './weather/weather.detail.component';
import {provideWebpack} from '../../config/webpack/webpackAsync';

@Component({ template: `` })
class DummyComponent {
  constructor(private router: Router) {
    this.router.navigate(['/Weather']);
  }
}

export const routes: RouterConfig = [
  { path: '', component: WeatherComponent },
  { path: 'Weather', component: WeatherComponent },
  { path: 'WeatherDetail', component: WeatherDetailComponent },
  { path: 'About', component: 'About' }
];

export const asyncRoutes: AsyncRoutes = {
  'About': require('es6-promise-loader?,About!./about/about.component.async')
};
// // Optimizations for initial loads
// // An array of callbacks to be invoked after bootstrap to prefetch async routes
// export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [
//   asyncRoutes['About'] // es6-promise-loader returns a function
// ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  provideWebpack(asyncRoutes)
];
