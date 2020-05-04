import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../superHero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: SuperHero[] = HEROES;
 public superHero: SuperHero = {
    id : 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
    const forDebug = 1;
  }

}
