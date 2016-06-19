import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[logElement]' // using [ ] means selecting attributes
})

export class LogElement {
  constructor(element: ElementRef) {
    console.log('directive [logElement]', element);
  }
}
