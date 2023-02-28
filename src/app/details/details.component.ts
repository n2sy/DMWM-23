import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;

  constructor(private recSer: ListRecruesService) {}

  addNewRecrue() {
    this.recSer.addRecrue(this.selCandidat);
  }
}
