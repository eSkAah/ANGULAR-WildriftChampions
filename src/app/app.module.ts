import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChampionAddComponent } from './champion-add/champion-add.component';
import { ChampionPutComponent } from './champion-put/champion-put.component';
import { ChampionsService } from './services/champions/champions.service';
import { ChampionComponent } from './champion/champion.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { FormsModule } from '@angular/forms';
import { ChampionDeleteComponent } from './champion-delete/champion-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ChampionDetailsComponent,
    ChampionAddComponent,
    ChampionPutComponent,
    ChampionComponent,
    ChampionListComponent,
    ChampionDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [
    ChampionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
