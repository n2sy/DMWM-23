import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() tab: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();

  sendCandToCv(cand, i) {
    this.msgToCv.emit(cand);
    console.log(i);
  }
}
