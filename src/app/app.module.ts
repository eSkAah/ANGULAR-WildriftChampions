import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ChampionsViewComponent } from './champions-view/champions-view.component';
import { ChampionComponent } from './champion/champion.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ChampionsViewComponent,
    ChampionComponent,
    ChampionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
