import { Component, Input, OnInit } from '@angular/core';
import { ChampionsService } from '../services/champions/champions.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  @Input()id?:string;
  @Input()image?:string;
  @Input()name?:string;
  @Input()surname?:string;
  @Input()description?:string;
  @Input()lane?:string;
  @Input()tier?:string;
  @Input()imgProfile?:string;

  constructor(
    private Champions: ChampionsService
  ) { }

  ngOnInit(): void {
  }

}

