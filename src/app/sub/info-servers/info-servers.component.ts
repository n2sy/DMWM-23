import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-info-servers',
  templateUrl: './info-servers.component.html',
  styleUrls: ['./info-servers.component.css'],
})
export class InfoServersComponent {
  oneServer;
  disableBtn;
  constructor(
    private activatedRoute: ActivatedRoute,
    private servService: ListServersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.oneServer = this.servService.getServerById(p.get('id'));
      },
    });

    this.activatedRoute.queryParamMap.subscribe({
      next: (q) => {
        this.disableBtn = q.get('allow') == '1' ? false : true;
      },
    });
  }
}
