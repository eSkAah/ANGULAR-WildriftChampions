import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champions } from '../models/champions.model';
import { ChampionsService } from '../services/champions/champions.service';

@Component({
  selector: 'app-champion-add',
  templateUrl: './champion-add.component.html',
  styleUrls: ['./champion-add.component.css']
})
export class ChampionAddComponent implements OnInit {

  public champs!:Champions;

  constructor(
    private Champions:ChampionsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.champs = new Champions();

  }

  addChamp(){
    this.Champions.addChampion(this.champs).subscribe(() => {
      this.champs = new Champions();
      this.router.navigate(['new']);


    })
  }

}
