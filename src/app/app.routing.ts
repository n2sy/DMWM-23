import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { WithTokenGuard } from './with-token.guard';
import { WithoutTokenGuard } from './without-token.guard';
import { LoopGuard } from './loop.guard';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     { path: 'add', component: AddComponent },
  //     { path: ':myid', component: InfosComponent },
  //     { path: ':myid/edit', component: EditComponent },
  //   ],
  // },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [WithTokenGuard] },
      { path: ':myid', component: InfosComponent },
      {
        path: ':myid/edit',
        component: EditComponent,
        canActivate: [WithTokenGuard],
      },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [WithoutTokenGuard],
    canDeactivate: [LoopGuard],
  },
  { path: 'servers', component: ManageServersComponent },
  {
    path: 'manage-serv',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
