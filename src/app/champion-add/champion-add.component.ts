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
  change: boolean = false;

  constructor(
    private Champions:ChampionsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.champs = new Champions();

  }

  addChamp(){
    this.change = true;

    setTimeout( () => {
      this.Champions.addChampion(this.champs).subscribe(() => {
        this.champs = new Champions();
        this.change = false;
        this.router.navigate(['']);
      })
    }, 4000)

  }
}
