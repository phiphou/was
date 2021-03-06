import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Settings} from './shared/settings';
import '../style/style.scss';

declare let $;

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  providers: [Settings],
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

  }

  ngOnInit() {
    // console.log('OnInit');
  }

  ngAfterViewInit() {
    // console.log('jQuery version: ', $().jquery);
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      document.querySelector('.en_flag').classList.add('lang_inactive');
      document.querySelector('.fr_flag').classList.add('lang_inactive');
      document.querySelector('.' + event.lang + '_flag').classList.remove('lang_inactive');
      Settings.getInstance().isFarenheit = (event.lang === 'en');
    });
    this.translate.use(userLang);
    this.router.navigate(['Weather']);
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
