import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { HomeComponent } from './home/home.component';
import { ChampionAddComponent } from './champion-add/champion-add.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent},

  {path: 'champions',
  component: ChampionDetailsComponent},

  {path: 'new',
  component: ChampionAddComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
