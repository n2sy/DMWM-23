import { Component } from '@angular/core';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListCandidatsService, private router: Router) {}
  onSubmit(newCand, e) {
    console.log(e.target[4].files[0]);
    const formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        newCand.avatar = response['fileName'];
        this.candSer.addCandidatAPI(newCand).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
        });
      },
    });
  }
}
