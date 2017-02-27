import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html',
  providers: [
    HeroService
  ]
})

export class HeroesComponent implements OnInit {

  constructor(private router: Router, private heroService: HeroService) {

  }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
