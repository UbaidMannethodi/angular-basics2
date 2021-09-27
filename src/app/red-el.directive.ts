import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    // added in the home component
    el.nativeElement.style.color = "red" ;
   }
    
}
