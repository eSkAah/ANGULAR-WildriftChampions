import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../services/champions/champions.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  champs!:any;
  constructor(
    private Champions:ChampionsService
  ) { }

  ngOnInit(): void {
    this.Champions.getAllChampions().subscribe((data: any) => {
      this.champs = data;
      console.log(data);
    });
  }

}
