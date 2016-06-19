import {Component, OnInit} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TodoComponent} from './todo/todo.component';
import {WeatherComponent} from './weather/weather.component';

import '../style/style.scss';
let $ = require('jquery');

@Component({
  selector: 'app',
  providers: [ROUTER_PROVIDERS/* Title*/],
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})

@RouteConfig([
  { path: '/todo', name: 'Todo', component: TodoComponent, useAsDefault: true },
  { path: '/weather', name: 'Weather', component: WeatherComponent },
  { path: '/about', name: 'About', loader: () => require('es6-promise?global,about!./about/about.component.async')('About') }
])
export class AppComponent implements OnInit {
  constructor(router: Router/*, title: Title*/) {

    router.subscribe((url) => { //fires on every URL change
      // _.mixin({capitalize: function(string) {
      //     return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
      //   }});
      //title.setTitle(_.capitalize(url));
    });
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngAfterViewInit() {
    console.log('jQuery version: ', $().jquery);
    window.onscroll = function() {
      if (document.body.scrollTop > document.getElementById('heightTest').clientHeight) {
        document.querySelector('.menu2').classList.add('fixed');
        document.querySelector('.cont').classList.add('fixed2');
      } else {
        document.querySelector('.menu2').classList.remove('fixed');
        document.querySelector('.cont').classList.remove('fixed2');
      }
    };
  }
}
