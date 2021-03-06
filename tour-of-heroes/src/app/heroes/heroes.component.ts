import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

 // public selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }
// asynchronous
  public getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroComponent: Selected hero id = ${hero.id}`);
  // }
}
