import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'servers', component: ManageServersComponent },
];

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
