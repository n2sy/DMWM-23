import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent {
  tab: Candidat[] = [];
  constructor(private recSer: ListRecruesService) {}

  ngOnInit() {
    this.tab = this.recSer.tabRecrues;
  }
}
