import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { HomeComponent } from './home/home.component';
import { ChampionAddComponent } from './champion-add/champion-add.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionPutComponent } from './champion-put/champion-put.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent},

  {path: 'champions/:id',
  component: ChampionDetailsComponent},

  {path: 'new',
  component: ChampionAddComponent},

  {path: 'delete/:id',
  component: ChampionAddComponent},

  {path: 'update/:id',
  component: ChampionPutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
