import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Garamond', 'Phosphate', 'Arial'];
  bg;
  txtColor;
  size;
  font;
  @ViewChild('nassim', { static: true }) inpValue;

  ngOnInit() {
    console.log(this.inpValue.nativeElement.value);
  }

  modifierSize() {
    // console.log(n);
    this.size = this.inpValue.nativeElement.value + 'px';
  }
}
