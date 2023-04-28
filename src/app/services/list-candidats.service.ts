import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/candidats';
  private tab: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 53, 'chef de projet', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 63, 'Directrice', 'marge.jpeg'),
  ];
  constructor(private http: HttpClient) {}

  getCandidatById(id) {
    return this.tab.find((element) => element._id == id);
  }

  getAllCandidats() {
    return this.tab;
  }
  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  addCandidat(newCandidat) {
    newCandidat._id = this.tab[this.tab.length - 1]._id + 1;
    this.tab.push(newCandidat);
  }

  addCandidatAPI(newCandidat) {
    return this.http.post(this.link, newCandidat);
  }

  updateCandidat(uCand) {
    let i = this.tab.indexOf(uCand);
    this.tab[i] = uCand;
  }

  deleteCandidat(cand) {
    let i = this.tab.indexOf(cand);
    this.tab.splice(i, 1);

    // Autre manière de supprimer
    //this.tab = this.tab.filter((element) => element._id != cand._id)
  }
}
