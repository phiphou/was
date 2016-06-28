import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import '../style/style.scss';

declare let $;

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})

export class AppComponent implements OnInit {
  constructor() {
  //
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngAfterViewInit() {
    console.log('jQuery version: ', $().jquery);
    $(document).foundation;
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
