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
    this.candToUpdate = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('myid')
    );
  }
  onSubmit() {
    this.candSer.updateCandidat(this.candToUpdate);
    this.router.navigateByUrl('/cv');
  }
}
