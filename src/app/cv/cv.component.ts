import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.jpg'),
    new Candidat(1, 'marge', 'simpson', 63, 'Directrice', 'marge.jpeg'),
  ];
  selectedCand: Candidat;

  recupererCandidat(cand) {
    this.selectedCand = cand;
  }
}
