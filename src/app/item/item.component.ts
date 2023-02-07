import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() msgToListe = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.msgToListe.emit(this.oneCandidat);
  }
}
