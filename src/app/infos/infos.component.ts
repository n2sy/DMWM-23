import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  selectedCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params['myid'];
    // this.id = this.activatedRoute.snapshot.paramMap.get('myid');
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('myid')).subscribe({
          next: (response) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
