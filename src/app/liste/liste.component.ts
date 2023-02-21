import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  // @Input() tab: Candidat[] = [];
  tab: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();

  constructor(private candSer: ListCandidatsService) {}
  ngOnInit() {
    this.tab = this.candSer.getAllCandidats();
  }

  showAll() {
    console.log(this.candSer.getAllCandidats());
  }

  sendCandToCv(cand, i) {
    this.msgToCv.emit(cand);
    console.log(i);
  }
}
