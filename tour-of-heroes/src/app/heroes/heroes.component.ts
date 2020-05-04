import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = HEROES;

  public selectedHero: Hero;
  constructor() {
  }

  ngOnInit(): void {
    const forDebug = 1;
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
