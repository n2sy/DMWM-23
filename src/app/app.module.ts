import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { DMWM_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubModule } from './sub/sub.module';
import { ExpObsComponent } from './exp-obs/exp-obs.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    DetailsComponent,
    ItemComponent,
    HomeAccountsComponent,
    ItemAccountComponent,
    AddAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    EditComponent,
    NotFoundComponent,
    ExpObsComponent,
    LoginComponent,
    ReactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DMWM_ROUTING,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
