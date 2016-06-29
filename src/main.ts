import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {AppComponent} from './app/app';

const ENV_PROVIDERS = [];

if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    TRANSLATE_PROVIDERS
  ])
    .catch(err => console.error(err));
});
