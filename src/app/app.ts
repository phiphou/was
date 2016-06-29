import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import { Router, NavigationEnd } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import '../style/style.scss';

declare let $;

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  pipes: [TranslatePipe],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})

export class AppComponent implements OnInit {
  constructor(private titleService: Title, public translate: TranslateService, private router: Router) {
    router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) {
        this.titleService.setTitle(ev.urlAfterRedirects.substring(1));
      }
    });
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    translate.use(userLang);
    router.navigate(['Weather']);
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
