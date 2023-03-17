import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColor = 'white';
  @HostBinding('style.color') color = 'black';

  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
    this.color = 'black';
  }
}
