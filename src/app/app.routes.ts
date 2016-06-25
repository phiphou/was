import { provideRouter, RouterConfig } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { provideWebpack } from '../../config/webpackAsync';
// From https://github.com/AngularClass/webpack-toolkit/
// import { ComponentResolver, Injectable, Inject } from '@angular/core';
// import { RuntimeCompiler } from '@angular/compiler';
//
// export const AC_WEBPACK_ASYNC_MAP = {};
// export const ANGULARCLASS_WEBPACK_RUNTIME_PROVIDERS = [
//   { provide: AC_WEBPACK_ASYNC_MAP, useValue: {} },
//   {
//     provide: ComponentResolver,
//     useFactory: (resolver, asyncMap) => {return new WebpackComponentResolver(resolver, asyncMap);},
//     deps: [RuntimeCompiler, AC_WEBPACK_ASYNC_MAP]
//   }
// ];
// export function provideWebpack(config) {
//   return [...ANGULARCLASS_WEBPACK_RUNTIME_PROVIDERS,{ provide: AC_WEBPACK_ASYNC_MAP, useValue: config }];
// }
// @Injectable()
// export class WebpackComponentResolver {
//   constructor(
//     private _resolver: ComponentResolver,
//     @Inject(AC_WEBPACK_ASYNC_MAP) private _asyncComps: any) {
//   }
//   resolveComponent(compType: any) {
//     return (typeof compType === 'string' && this._asyncComps[compType]) ? this._fetchComponent(compType) : this._resolver.resolveComponent(compType);
//   }
//   prefetchComponent(compType) {
//     return this._fetchComponent(compType);
//   }
//   private _fetchComponent(compType) {
//     return this._asyncComps[compType]()
//       .then(cmpFile => {
//         return this._resolver.resolveComponent(cmpFile[compType] || cmpFile.default || cmpFile);
//       });
//   }
// }

export const routes: RouterConfig = [

  { path: '', component: WeatherComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: 'About' },
  { path: '**', component: WeatherComponent }
];

export const asyncRoutes: AsyncRoutes = {
  'About': require('es6-promise-loader!./about/about.component.async')
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
