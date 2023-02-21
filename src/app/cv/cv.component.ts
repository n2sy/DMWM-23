import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCand: Candidat;

  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    this.firstSer.showInfos();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  addNewCand() {
    this.candSer.addCandidat();
  }

  showAll() {
    console.log(this.candSer.getAllCandidats());
  }

  recupererCandidat(cand) {
    this.selectedCand = cand;
  }
}
