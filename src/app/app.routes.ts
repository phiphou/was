import { provideRouter, RouterConfig } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { provideWebpack } from '../../config/webpack/webpackAsync';

export const routes: RouterConfig = [
  { path: '', component: WeatherComponent },
  { path: 'Weather', component: WeatherComponent },
  { path: 'About', component: 'About' },
  { path: '**', component: WeatherComponent }
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
