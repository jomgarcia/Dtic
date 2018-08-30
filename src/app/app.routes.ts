import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {OfficesComponent} from './components/offices/offices.component';
import {ContactComponent} from './components/contact/contact.component';
import { TeamComponent} from './components/team/team.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'offices', component: OfficesComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
