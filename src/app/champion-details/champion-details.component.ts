import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from '../services/champions/champions.service';


@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.css']
})
export class ChampionDetailsComponent implements OnInit {

  champ!: any;
  id!: any;
  change: boolean = false;

  constructor(
    private Champions: ChampionsService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const champId = this.route.snapshot.params['id'];

    this.champ = this.Champions.getChampionById(champId).subscribe((data: any) => {
    this.champ = data;
    this.id = data.id;

    });


  }

  deleteChamp(){
    console.log('deletechampTS');
    this.change = true;
      setTimeout( () => {
        this.change = false;
      }, 3000)
    this.Champions.deleteChampion(this.id)

  }

}
