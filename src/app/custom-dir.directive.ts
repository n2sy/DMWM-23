import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColor = 'pink';
  @HostBinding('style.color') color = 'green';

  constructor() {}

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'grey';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'pink';
    this.color = 'green';
  }
}
