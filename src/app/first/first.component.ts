import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  section = 'GL';
  annee = '2eme annee';
  color = 'blue';
  hd = false;

  clickHandler() {
    alert("j'ai été cliqué !");
  }

  traitement(msg) {
    alert(msg);
  }
}
