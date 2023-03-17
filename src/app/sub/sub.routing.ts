import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServersComponent } from './info-servers/info-servers.component';

const subRoutes: Routes = [
  {
    path: '',
    component: HomeServersComponent,
    children: [
      {
        path: ':id',
        component: InfoServersComponent,
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
