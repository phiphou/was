import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import 'jquery';
declare let $;

import '../style/style.scss';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  constructor() {
    //router.subscribe((url) => { //fires on every URL change
    // _.mixin({capitalize: function(string) {
    //     return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    //   }});
    //title.setTitle(_.capitalize(url));
    //});
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngAfterViewInit() {
    console.log('jQuery version: ', $().jquery);
    // $(document).foundation;
    // window.onscroll = function() {
    //   if (document.body.scrollTop > document.getElementById('heightTest').clientHeight) {
    //     document.querySelector('.menu2').classList.add('fixed');
    //     document.querySelector('.cont').classList.add('fixed2');
    //   } else {
    //     document.querySelector('.menu2').classList.remove('fixed');
    //     document.querySelector('.cont').classList.remove('fixed2');
    //   }
    // };
  }
}
