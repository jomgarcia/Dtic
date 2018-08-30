import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// rutas
import {   APP_ROUTING } from './app.routes';


//Servicios
import { TeamService } from './servicios/team.service';
import { PortafolioService } from './servicios/portafolio.services';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OfficesComponent } from './components/offices/offices.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { SocialComponent } from './components/social/social.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OfficesComponent,
    ServicesComponent,
    ContactComponent,
    TeamComponent,
    PortafolioComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    TeamService,
    PortafolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
