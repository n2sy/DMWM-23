import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  candToUpdate;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('myid'))
      .subscribe({
        next: (response) => {
          this.candToUpdate = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  onSubmit() {
    this.candSer.updateCandidatAPI(this.candToUpdate).subscribe({
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
