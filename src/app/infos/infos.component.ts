import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  id;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params['myid'];
    // this.id = this.activatedRoute.snapshot.paramMap.get('myid');
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('myid');
      },
    });
  }
}
