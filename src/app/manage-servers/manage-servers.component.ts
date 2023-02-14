import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  listServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 2, 2),
      statut: 'critical',
    },
    {
      name: 'Test Development Server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      name: 'Development Server',
      type: 'large',
      date_d: new Date(2022, 2, 2),
      statut: 'stable',
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      date_d: new Date(2020, 2, 2),
      statut: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
