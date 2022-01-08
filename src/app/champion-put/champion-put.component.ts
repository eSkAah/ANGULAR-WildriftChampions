import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionsService } from '../services/champions/champions.service';

@Component({
  selector: 'app-champion-put',
  templateUrl: './champion-put.component.html',
  styleUrls: ['./champion-put.component.css']
})
export class ChampionPutComponent implements OnInit {

  champ!: any;
  change: boolean = false;

  constructor(
    private Champions: ChampionsService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    const champId = this.route.snapshot.params['id']
    console.log('id du chamion : ' + champId);

    this.Champions.get(champId).subscribe((value:any) => {
      console.log(value)
      this.champ = value;
    })

  }

  updateInfos(){
    this.Champions.updateChampion(this.champ).subscribe( () => {
      this.change = true;
      setTimeout( () => {
        this.change = false;
      }, 3000)
    })
  }


}
