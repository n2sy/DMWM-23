import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  editedServ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private servService: ListServersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.editedServ = this.servService.getServerById(p.get('id'));
      },
    });
  }
}
