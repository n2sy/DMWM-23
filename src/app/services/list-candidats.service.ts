import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tab: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 63, 'Directrice', 'marge.jpeg'),
  ];
  constructor() {}

  getCandidatById(id) {
    return this.tab.find((element) => element._id == id);
  }

  getAllCandidats() {
    return this.tab;
  }

  addCandidat() {
    this.tab.push(
      new Candidat(4, 'NEW', 'CANDIDAT', 63, 'Directrice', 'marge.jpeg')
    );
  }
}
